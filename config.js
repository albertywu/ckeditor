/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	config.toolbar = null;

	config.toolbarGroups = [
		{ name: 'basic', groups: ['basicstyles', 'cleanup', 'list', 'indent', 'undo', 'mode'] }
	];

	// Remove some buttons from toolbar
	config.removeButtons = 'Strike,Subscript,Superscript';

	config.extraPlugins = 'removeformat,indentblock,sharedspace';

	// Remove plugins
	//config.removePlugins = 'elementspath,iframe,iframedialog,justify,language,mathjax,newpage,pagebreak,placeholder,preview,save,scayt,showblocks,smiley,stylesheetparser,templates,widget,wsc,uicolor,adobeair,magicline,maximize,resize';
	config.removePlugins = 'elementspath,showblocks,magicline,maximize,resize';

	// Simplify the dialog windows
	config.removeDialogTabs = 'image:advanced;link:advanced';

	// Preserve Word styles
	config.pasteFromWordRemoveFontStyles = false;
	config.pasteFromWordRemoveStyles = false;

	// Whitelist these DOM elements
	config.extraAllowedContent = 'table tbody tr td h1 h2; img a [*]';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';


};
