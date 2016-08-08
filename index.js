#!/usr/bin/env node

/**
 * Emojit.js
 * A Command Line Tool to help you write commits using emojis.
 */

'use strict';
var inquirer = require('inquirer');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;


var emojis = [
	{
		name: '➕  Adding a feature',
		value: ':heavy_plus_sign:'
	},
	{
		name: '➖  Removing a feature',
		value: ':heavy_minus_sign:'
	},
	{
		name: '📚  Documentation',
		value: ':books:'
	},
	{
		name: '🎨  Design',
		value: ':art:'
	},
	{
		name: '⬆  Upgrading dependencies',
		value: ':arrow_up:'
	},
	{
		name: '⬇  Downgrading dependencies',
		value: ':arrow_down:'
	},
	{
		name: '🎉  Initial commit',
		value: ':tada:'
	}
]

inquirer.prompt([
	{
		type: 'list',
		name: 'emoji',
		message: 'Select emoji:',
		choices: emojis
	},
	{
		type: 'input',
		name: 'subject',
		message: 'Commit message:'
	}
]).then(function (answers) {
	var commit = answers.emoji + ' ' + answers.subject
	spawn('git', ['commit', '-m ' + commit], {stdio: 'inherit'})
});
