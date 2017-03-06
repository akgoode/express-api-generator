'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Monkey = models.monkey;

const authenticate = require('./concerns/authenticate');
const setUser = require('./concerns/set-current-user');
const setModel = require('./concerns/set-mongoose-model');

const index = (req, res, next) => {
  Monkey.find()
    .then(monkeys => res.json({
      monkeys: monkeys.map((e) =>
        e.toJSON({ virtuals: true, user: req.user })),
    }))
    .catch(next);
};

const show = (req, res) => {
  res.json({
    monkey: req.monkey.toJSON({ virtuals: true, user: req.user }),
  });
};

const create = (req, res, next) => {
  let monkey = Object.assign(req.body.monkey, {
    _owner: req.user._id,
  });
  Monkey.create(monkey)
    .then(monkey =>
      res.status(201)
        .json({
          monkey: monkey.toJSON({ virtuals: true, user: req.user }),
        }))
    .catch(next);
};

const update = (req, res, next) => {
  delete req.body._owner;
  req.monkey.update(req.body.monkey)
    .then(() => res.sendStatus(204))
    .catch(next);
};

const destroy = (req, res, next) => {
  req.monkey.remove()
    .then(() => res.sendStatus(204))
    .catch(next);
};

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
}, { before: [
  { method: setUser, only: ['index', 'show'] },
  { method: authenticate, except: ['index', 'show'] },
  { method: setModel(Monkey), only: ['show'] },
  { method: setModel(Monkey, { forUser: true }), only: ['update', 'destroy'] },
], });
