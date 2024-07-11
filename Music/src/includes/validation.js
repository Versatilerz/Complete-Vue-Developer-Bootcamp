import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  configure,
  ErrorMessage
} from 'vee-validate';
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('tos', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alpha_spaces', alphaSpaces);
    defineRule('email', email);
    defineRule('min_value', minVal);
    defineRule('max_value', maxVal);
    defineRule('confirmed_password', confirmed);
    defineRule('excluded', excluded);
    defineRule('country_excluded', excluded);

    configure({
      generateMessage: (contex) => {
        const messages = {
          required: `The field ${contex.field} is required.`,
          min: `The field ${contex.field} is to short.`,
          max: `The field ${contex.field} is to long.`,
          alpha_spaces: `The field ${contex.field} may only contain alphabetical characters and spaces.`,
          email: `The field ${contex.field} must be a valid email.`,
          min_value: `The field ${contex.field} is to low.`,
          max_value: `The field ${contex.field} is to high.`,
          excluded: `You are not allowed to use this value for the field ${contex.field}`,
          country_excluded: `Duo to restrictions we do not accept users from this location`,
          confirmed_password: `Passwords do not match`,
          tos: `You must accept the Terms of Service`
        };
        const message = messages[contex.rule.name]
          ? messages[contex.rule.name]
          : `The field ${contex.field} is invalid`;

        return message;
      }
    });
  }
};
