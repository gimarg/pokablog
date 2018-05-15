(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.mybehavior = {
    attach: function (context, settings) {

      // Removes part of options from user actions select menu
      $("#views-form-user-admin-people-page-1 #edit-action option[value='user_add_role_action.administrator']").remove();
      $("#views-form-user-admin-people-page-1 #edit-action option[value='user_add_role_action.manager']").remove();
      $("#views-form-user-admin-people-page-1 #edit-action option[value='user_remove_role_action.administrator']").remove();
      $("#views-form-user-admin-people-page-1 #edit-action option[value='user_remove_role_action.manager']").remove();


    }
  };
})(jQuery, Drupal, drupalSettings);