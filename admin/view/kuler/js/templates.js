angular.module("kulerModule").run(["$templateCache", function($templateCache) {$templateCache.put("view/kuler/angular/templates/autocomplete.html","<div class=\"ms-container\">\r\n	<div class=\"ms-selectable\">\r\n		<input type=\"text\" class=\"form-control search-input\" autocomplete=\"off\" placeholder=\"{{\'text_search_autocomplete_placeholder\' | _t:\'Search (Autocomplete)\'}}\" ui-autocomplete=\"options\" ng-model=\"input\">\r\n		<span class=\"wait\" ng-if=\"itemsLoading\" style=\"position: relative; top: 25px; left: 10px;\"><img src=\"view/image/loading.gif\" /></span>\r\n		<ul class=\"ms-list\">\r\n			<li class=\"ms-elem-selectable\" ng-repeat=\"item in items\"><span><a href=\"{{item.link}}\">{{item.name}}</a></span> <span class=\"item-remover\" ng-click=\"removeItem($index)\" tooltip=\"{{\'text_remove\' | _t:\'Remove\'}}\" tooltip-placement=\"left\"><i class=\"fa fa-minus-circle\"></i></span></li>\r\n		</ul>\r\n	</div>\r\n</div>");
$templateCache.put("view/kuler/angular/templates/image-selector.html","<div class=\"fileupload image-selector-container\">\r\n	<input id=\"{{input_id}}\" type=\"hidden\" />\r\n	<div class=\"fileupload-new thumbnail\" id=\"thumb-container-{{imageId}}\" ng-click=\"browse()\" style=\"cursor: pointer\">\r\n		<img ng-src=\"{{thumb}}\" />\r\n	</div>\r\n	<p class=\"clearfix\" ng-if=\"hasButton\">\r\n		<button class=\"btn btn-default btn-xs\" ng-click=\"browse()\">Browse</button>\r\n		<button class=\"btn btn-default btn-xs\" ng-click=\"clear()\">Clear</button>\r\n	</p>\r\n</div>");
$templateCache.put("view/kuler/angular/templates/multilingual-input.html","<div style=\"display: inline-block\">\r\n	<div class=\"input-group\" ng-repeat=\"language in languages\" style=\"margin-top: 5px;\">\r\n		<input type=\"text\" class=\"form-control\" ng-model=\"input[language.code]\" ng-change=\"onChange(index, input[language.code], language.code)\" />\r\n		<span class=\"input-group-addon btn-white\"><img ng-src=\"view/image/flags/{{language.image}}\" title=\"{{language.name}}\"></span>\r\n	</div>\r\n</div>");
$templateCache.put("view/kuler/angular/templates/style-font.html","<div>\r\n	<p ng-if=\"fontFamily\">\r\n		<label class=\"control-label\">{{\'text_style_font_name\' | _t:\'Font Name\'}}</label>\r\n		<select class=\"form-control input-sm style-font\" ng-model=\"font.font_family\" ng-change=\"loadFont()\" ng-options=\"font.family as font.family group by font.group for font in fonts\">\r\n			<option value=\"\"></option>\r\n		</select>\r\n	</p>\r\n	<p ng-if=\"fontWeight\">\r\n		<label class=\"control-label\">{{\'text_style_font_weight\' | _t:\'Font Weight\'}}</label>\r\n		<select class=\"form-control input-sm\" ng-model=\"font.font_weight\">\r\n			<option value=\"100\">{{\'text_style_thin\' | _t:\'Thin\'}}</option>\r\n			<option value=\"200\">{{\'text_style_extra_light\' | _t:\'Extra-Light\'}}</option>\r\n			<option value=\"300\">{{\'text_style_light\' | _t:\'Light\'}}</option>\r\n			<option value=\"400\">{{\'text_style_normal\' | _t:\'Normal\'}}</option>\r\n			<option value=\"500\">{{\'text_style_medium\' | _t:\'Medium\'}}</option>\r\n			<option value=\"600\">{{\'text_style_demi_bold\' | _t:\'Demi-Bold\'}}</option>\r\n			<option value=\"700\">{{\'text_style_bold\' | _t:\'Bold\'}}</option>\r\n			<option value=\"800\">{{\'text_style_heavy\' | _t:\'Heavy\'}}</option>\r\n			<option value=\"900\">{{\'text_style_black\' | _t:\'Black\'}}</option>\r\n		</select>\r\n	</p>\r\n	<p ng-if=\"fontSize\">\r\n		<label class=\"control-label\">{{\'text_style_font_size\' | _t:\'Font Size\'}}</label>\r\n		<select class=\"form-control input-sm\" ng-model=\"font.font_size\">\r\n			<option value=\"8px\">8px</option>\r\n			<option value=\"9px\">9px</option>\r\n			<option value=\"10px\">10px</option>\r\n			<option value=\"11px\">11px</option>\r\n			<option value=\"12px\">12px</option>\r\n			<option value=\"13px\">13px</option>\r\n			<option value=\"14px\">14px</option>\r\n			<option value=\"15px\">15px</option>\r\n			<option value=\"16px\">16px</option>\r\n			<option value=\"17px\">17px</option>\r\n			<option value=\"18px\">18px</option>\r\n			<option value=\"19px\">19px</option>\r\n			<option value=\"20px\">20px</option>\r\n			<option value=\"21px\">21px</option>\r\n			<option value=\"22px\">22px</option>\r\n			<option value=\"23px\">23px</option>\r\n			<option value=\"24px\">24px</option>\r\n			<option value=\"25px\">25px</option>\r\n			<option value=\"26px\">26px</option>\r\n			<option value=\"27px\">27px</option>\r\n			<option value=\"28px\">28px</option>\r\n			<option value=\"29px\">29px</option>\r\n			<option value=\"30px\">30px</option>\r\n			<option value=\"31px\">31px</option>\r\n			<option value=\"32px\">32px</option>\r\n			<option value=\"33px\">33px</option>\r\n			<option value=\"34px\">34px</option>\r\n			<option value=\"35px\">35px</option>\r\n			<option value=\"36px\">36px</option>\r\n			<option value=\"37px\">37px</option>\r\n			<option value=\"38px\">38px</option>\r\n			<option value=\"39px\">39px</option>\r\n			<option value=\"40px\">40px</option>\r\n			<option value=\"41px\">41px</option>\r\n			<option value=\"42px\">42px</option>\r\n			<option value=\"43px\">43px</option>\r\n			<option value=\"44px\">44px</option>\r\n			<option value=\"45px\">45px</option>\r\n			<option value=\"46px\">46px</option>\r\n			<option value=\"47px\">47px</option>\r\n			<option value=\"48px\">48px</option>\r\n			<option value=\"49px\">49px</option>\r\n			<option value=\"50px\">50px</option>\r\n			<option value=\"51px\">51px</option>\r\n			<option value=\"52px\">52px</option>\r\n			<option value=\"53px\">53px</option>\r\n			<option value=\"54px\">54px</option>\r\n			<option value=\"55px\">55px</option>\r\n			<option value=\"56px\">56px</option>\r\n			<option value=\"57px\">57px</option>\r\n			<option value=\"58px\">58px</option>\r\n			<option value=\"59px\">59px</option>\r\n			<option value=\"60px\">60px</option>\r\n		</select>\r\n	</p>\r\n	<p ng-if=\"fontStyle\">\r\n		<label class=\"control-label\">{{\'text_style_font_style\' | _t:\'Font Style\'}}</label>\r\n		<select class=\"form-control input-sm\" ng-model=\"font.font_style\">\r\n			<option value=\"normal\">{{\'text_style_normal\' | _t:\'Normal\'}}</option>\r\n			<option value=\"italic\">{{\'text_style_italic\' | _t:\'Italic\'}}</option>\r\n			<option value=\"oblique\">{{\'text_oblique\' | _t:\'Oblique\'}}</option>\r\n		</select>\r\n	</p>\r\n	<p ng-if=\"textTransform\">\r\n		<label class=\"control-label\">{{\'text_style_transform\' | _t:\'Text Transform\'}}</label>\r\n		<select class=\"form-control input-sm\" ng-model=\"font.text_style_transform\">\r\n			<option value=\"none\">{{\'text_style_none\' | _t:\'None\'}}</option>\r\n			<option value=\"uppercase\">{{\'text_style_uppercase\' | _t:\'Uppercase\'}}</option>\r\n			<option value=\"lowercase\">{{\'text_style_lowercase\' | _t:\'Lowercase\'}}</option>\r\n		</select>\r\n	</p>\r\n</div>");
$templateCache.put("view/kuler/angular/templates/style-image-selector.html","<div class=\"fileupload image-selector-container\">\r\n	<input id=\"{{input_id}}\" type=\"hidden\" ng-model=\"image.path\" value=\"{{image.path}}\" />\r\n	<div class=\"fileupload-new thumbnail\">\r\n		<img ng-src=\"{{thumb}}\" />\r\n	</div>\r\n	<p class=\"clearfix\">\r\n		<button class=\"btn btn-default btn-xs\" ng-click=\"browse()\">Browse</button>\r\n		<button class=\"btn btn-default btn-xs\" ng-click=\"clear()\">Clear</button>\r\n	</p>\r\n	<p ng-if=\"image.path\">\r\n		<label class=\"control-label\">Background repeat</label>\r\n		<select class=\"input-sm\" ng-model=\"image.repeat\">\r\n			<option>no-repeat</option>\r\n			<option value=\"repeat\">repeat</option>\r\n			<option value=\"repeat-x\">repeat-x</option>\r\n			<option value=\"repeat-y\">repeat-y</option>\r\n			<option value=\"inherit\">inherit</option>\r\n		</select>\r\n	</p>\r\n	<p ng-if=\"image.path\">\r\n		<label class=\"control-label\">Background Position</label>\r\n		<select class=\"input-sm\" ng-model=\"image.position\">\r\n			<option value=\"left top\">left top</option>\r\n			<option value=\"left bottom\">left bottom</option>\r\n			<option value=\"right top\">right top</option>\r\n			<option value=\"right bottom\">right bottom</option>\r\n			<option value=\"center top\">center top</option>\r\n			<option value=\"center bottom\">center bottom</option>\r\n			<option value=\"center center\">center center</option>\r\n		</select>\r\n	</p>\r\n	<p ng-if=\"image.path\">\r\n		<label class=\"control-label\">Background Attachment</label>\r\n		<select class=\"input-sm\" ng-model=\"image.attachment\">\r\n			<option value=\"inherit\">inherit</option>\r\n			<option value=\"fixed\">fixed</option>\r\n		</select>\r\n	</p>\r\n</div>");
$templateCache.put("view/kuler/angular/templates/style-pattern.html","<div class=\"pattern-container\">\r\n	<button class=\"btn btn-danger btn-xs\" ng-click=\"clear()\">{{\'text_clear\' | _t:\'Clear\'}}</button>\r\n	<ul class=\"pattern-list\">\r\n		<li ng-repeat=\"sourcePattern in sourcePatterns\" style=\"background: url({{sourcePattern.image}}) no-repeat center center;\" ng-click=\"selectPattern(sourcePattern.path);\" ng-class=\"{active: activate(sourcePattern.path)}\">\r\n		</li>\r\n	</ul>\r\n</div>");
$templateCache.put("view/kuler/angular/templates/switch.html","<div class=\"kuler-switch-btn\">\r\n	<input type=\"checkbox\" ng-model=\"input\" value=\"1\" />\r\n	<span class=\"kuler-switch-btn-holder\"></span>\r\n</div>");
$templateCache.put("view/kuler/angular/templates/switch2.html","<div class=\"kuler-switch-btn\">\r\n	<input type=\"checkbox\" ng-model=\"input\" value=\"\'1\'\" ng-true-value=\"\'1\'\" ng-false-value=\"\'0\'\" />\r\n	<span class=\"kuler-switch-btn-holder\"></span>\r\n</div>");}]);