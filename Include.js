'use strict';

/*
########################################################################################################################################################################################################
### TASK REGISTRATION ###
########################################################################################################################################################################################################
*/
// add additional tasks here
require('./Tasks/Styles');
require('./Tasks/Scripts');

// IMPORTANT: default task needs to be the last one before the last one to be required
require('./Tasks/Watch');
// IMPORTANT: default task needs to be the last one to be required
require('./Tasks/Default');
