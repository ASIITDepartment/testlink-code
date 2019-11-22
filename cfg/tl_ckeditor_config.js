/*  
TestLink Open Source Project - http://testlink.sourceforge.net/
@filesource: tl_ckeditor_config.js
Configure CKEditor
See: http://docs.cksource.com/ for more information

List of all config parameters that can be set here can be found on:
http://docs.cksource.com/Main_Page
*/

CKEDITOR.editorConfig = function( config )
{
	// choose your prefered ckedtior skin
	// available skins for version 4.x: moono-lisa => default
	// For skins present on version 3.x => http://ckeditor.com/addons/skins/all
	config.skin = 'moono';
	
	// set css of ckeditor content to testlink.css
	config.contentsCss = 'gui/themes/default/css/testlink.css';
	
	// do not check "Replace actual contents" checkbox as default
	config.templates_replaceContent = false;

	config.toolbarCanCollapse = true;
	config.toolbarStartupExpanded = false;
	config.undoStackSize = 100;

	config.width = '100%';

	// Toolbar with all available features - can be used as template for custom toolbars
	// '-' creates toolbar seperator
	// '/' creates a new toolbar "line"
	// [...] defines sub-toolbars
	// config.toolbar_Full =
	// [
	//  	['Source','-','Save','NewPage','Preview','-','Templates'],
	//     ['Cut','Copy','Paste','PasteText','PasteFromWord','-','Print', 'SpellChecker', 'Scayt'],
	//     ['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
	//     ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'],
	//     '/',
	//     ['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
	//     ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote','CreateDiv'],
	//     ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
	//     ['BidiLtr', 'BidiRtl' ],
	//     // ['Link','Unlink','Anchor'],
	//     ['EqnEditor','CodeSnippet','Image','Link','Flash','Table','HorizontalRule','Smiley','SpecialChar','filemanager'],
	//     '/',
	//     ['Styles','Format','Font','FontSize'],
	//     ['TextColor','BGColor'],
	//     ['Maximize','ShowBlocks','-','About']
	// ];

	// toolLayout = [
	// 	['Maximize','-'],
	// 	['Undo','Redo','-','Find','Replace','-'],
	// 	['EqnEditor','CodeSnippet','Image','Link','Table','SpecialChar','HorizontalRule'],
	// 	['Outdent','Indent','-','Blockquote',],
	// 	'/',
	// 	['Bold','Italic','Underline','Strike','Subscript','Superscript','-'],
	// 	['NumberedList','BulletedList','-'],
	// 	['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-'],
	// 	['TextColor','BGColor','RemoveFormat'],
	// 	// '/',
	// 	// ['Styles','Format','Font','FontSize'],
	// ];

	toolLayout = [
		{ name: 'window', items: ['Maximize'] },
		{ name: 'clipboard', items: [ 'Undo', 'Redo', '-', 'Find', 'Replace'] },
		{ name: 'insert', items: ['EqnEditor','CodeSnippet','Image','Link','Table','SpecialChar','HorizontalRule'] },
		{ name: 'paragraphFormat', items: ['Outdent','Indent','-','Blockquote',] },
		'/',
		{ name: 'basicstyles', items: ['Bold','Italic','Underline','Strike','Subscript','Superscript'] },
		{ name: 'lists', items: ['NumberedList','BulletedList','-'] },
		{ name: 'lineFormat', items: ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'] },
		{ name: 'textColor', items: ['TextColor','BGColor','RemoveFormat'] }
	];
	
	// default Toolbar
	config.toolbar_Testlink = toolLayout;
	
	// mini Toolbar
	config.toolbar_TestlinkMini = toolLayout;
	
	
	// full Toolbar
	config.toolbar_Full = toolLayout;
	
	/* Configuration of File Browser
	   You can use theses definitions if you buy ckfinder
	   more informations on http://ckfinder.com/
	   download ckfinder and put into third party folder
	*/
	config.filebrowserBrowseUrl = '/third_party/ckeditor/plugins/filemanager/dialog.php?type=2&editor=ckeditor&fldr=';
	config.filebrowserImageBrowseUrl = '/third_party/ckeditor/plugins/filemanager/dialog.php?type=1&editor=ckeditor&fldr=';
	config.filebrowserUploadUrl = '/third_party/ckeditor/plugins/filemanager/dialog.php?type=2&editor=ckeditor&fldr=';

	// config.filebrowserBrowseUrl = '/third_party/ckfinder/ckfinder.html';
	// config.filebrowserImageBrowseUrl = '/third_party/ckfinder/ckfinder.html?Type=Images';
	// // config.filebrowserFlashBrowseUrl = '/third_party/ckfinder/ckfinder.html?Type=Flash';
	// // uncomment these lines only if you want to allow quick upload
	// config.filebrowserUploadUrl = '/third_party/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files';
	// config.filebrowserImageUploadUrl = '/third_party/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images';
	// // config.filebrowserFlashUploadUrl = '/third_party/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash';
}