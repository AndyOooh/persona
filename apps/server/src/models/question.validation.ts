import Joi from 'joi';

export const questionModel = Joi.object({
  id: Joi.number().required(),
  text: Joi.string().required(),
  options: Joi.array().min(2).items(
    Joi.object({
      text: Joi.string().required(),
      score: Joi.number().min(0).max(1).required(),
    })
  )
});
