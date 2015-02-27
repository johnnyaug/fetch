<?php include_once(DIR_TEMPLATE . 'module/kuler_helper.tpl'); ?>
<?php echo $header; ?><?php echo $column_left; ?>
<div id="content">
	<section id="kuler-module-content" class="kuler-module" ng-app="kulerModule" ng-controller="ContactFormCtrl">
		<section class="wrapper">
			<div class="alert alert-{{messageType}} fade in" ng-if="message">
				<button data-dismiss="alert" class="close close-sm" type="button">
					<i class="fa fa-times"></i>
				</button>
				{{message}}
			</div>

			<div class="row">
				<div class="col-md-12">
					<ul class="breadcrumb">
						<?php $breadcrumb_index = 0; ?>
						<?php foreach ($breadcrumbs as $breadcrumb) { ?>
							<li><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
								<?php $breadcrumb_index++; ?>
							</li>
						<?php } ?>
					</ul>
				</div>
			</div>

			<div class="row">
				<div class="col-sm-12">
					<div class="panel" id="kuler-panel-action">
						<div class="panel-body">
							<div class="col-lg-10 col-sm-9">
								<div id="store-selector-container">
									<label><?php echo _t('text_current_store', 'Current Store'); ?></label>
									<select class="form-control" id="store-selector" ng-model="store_id" ng-change="selectStore(store_id)" tooltip="<?php echo _t('text_hint_store', 'Select store to configure this module'); ?>">
										<?php foreach ($stores as $index => $store_name) { ?>
											<option value="<?php echo $index; ?>"><?php echo $store_name; ?></option>
										<?php } ?>
									</select>
								</div>
								<div>
									<label class="kuler-module-status-label"><?php echo _t('text_status', 'Status'); ?></label>
									<?php echo renderSwitch(array(
										'type' => 'switch',
										'name' => 'status',
										'column' => 2
									)); ?>
									<button class="btn-kuler btn btn-success" id="module-adder" ng-click="addModule()"><i class="fa fa-plus-circle"></i> <?php echo _t('button_add_module', 'Add Module'); ?></button>
								</div>
							</div>
							<div class="pull-right main-actions">
								<button class="btn-kuler btn btn-success" ng-click="save()"><i class="fa fa-check-circle-o"></i> <?php echo _t('button_save'); ?></button>
								<a class="btn-kuler btn btn-danger" href="<?php echo $cancel_url; ?>"><i class="fa fa-times-circle"></i> <?php echo _t('button_cancel'); ?></a>
							</div>
						</div>
					</div>
				</div>

				<div class="col-sm-12">
					<section class="panel" id="kuler-panel-navigation">
						<nav class="navbar" role="navigation" id="kuler-navbar-container">
							<div class="kuler-navigation-left">
								<div class="navbar-header">
									<h2><img src="view/kuler/image/icon/kuler_logo.png" /> <?php echo _t('heading_kuler_module'); ?></h2>
								</div>
							</div>
							<div class="kuler-navigation-right" id="kuler-navigation-space"></div>
						</nav>
					</section>

					<section class="panel" id="kuler-panel-section">
					<div class="panel-body">
						<tabset vertical="true" main-tab="true" type="pills" id="kuler-module-container" class="clearfix">
							<tab ng-repeat="module in modules" active="module.active" select="onSelectModule($index)">
								<tab-heading>
									<i class="fa fa-file-text-o"></i>
									{{module.mainTitle}}
									<span class="module-remover" ng-click="removeModule($index)" tooltip="<?php echo _t('button_remove', 'Remove') ?>" event-prevent-default event-stop-propagation><i class="fa fa-minus-circle"></i></span>
								</tab-heading>
								<div class="module" id="module-{{$index}}">
									<?php echo renderBeginOptionContainer(); ?>
									<?php echo renderOption(array(
										'label' => _t('entry_title', 'Title'),
										'type' => 'multilingual_input',
										'name' => 'module.title',
										'inputAttrs' => 'index="{{$index}}" on-change="onTitleChanged"'
									)); ?>
									<?php echo renderOption(array(
										'label' => _t('entry_short_code', 'Short Code'),
										'type' => 'input',
										'name' => 'module.short_code',
										'inputAttrs' => 'disabled'
									)); ?>
									<?php echo renderOption(array(
										'label' => _t('entry_sort_order', 'Sort Order'),
										'type' => 'input',
										'name' => 'module.sort_order',
										'column' => 2,
										'options' => $positions
									)); ?>
									<?php echo renderOption(array(
										'label' => _t('entry_show_title', 'Show Title'),
										'type' => 'switch',
										'name' => 'module.show_title'
									)); ?>
									<?php echo renderCloseOptionContainer(); ?>

									<fiedset>
										<legend><?php echo _t('text_custom_information', 'Custom Information'); ?></legend>
										<?php echo renderBeginOptionContainer(); ?>
										<?php echo renderOption(array(
											'label' => _t('entry_show_custom_information', 'Show Custom Information'),
											'type' => 'switch',
											'name' => 'module.show_custom_information'
										)); ?>
										<?php echo renderCloseOptionContainer(); ?>
										<tabset class="clearfix">
											<?php foreach ($languages as $language) { ?>
											<tab>
												<tab-heading>
													<img src="view/image/flags/<?php echo $language['image']; ?>" title="<?php echo $language['name']; ?>"> <?php echo $language['name']; ?>
												</tab-heading>
												<?php echo renderEditor(array(
													'name' => 'module.custom_information[\'' . $language['code'] . '\']'
												)) ?>
											</tab>
											<?php } ?>
											<tab ng-repeat="tab in tabs" heading="{{tab.title}}" active="tab.active" disabled="tab.disabled">
												{{tab.content}}
											</tab>
										</tabset>
									</fiedset>
								</div>
							</tab>
						</tabset>
					</div>
				</section>
			</div>
		</div>
	<div id="kuler-loader" ng-if="loading"></div>
</section>
<script>
	var Kuler = {
		store_id: <?php echo $store_id ?>,
		actionUrl: <?php echo json_encode($action_url); ?>,
		cancelUrl: <?php echo json_encode($cancel_url); ?>,
		storeUrl: <?php echo json_encode($store_url); ?>,
		token: <?php echo json_encode($token); ?>,
		extensionCode: <?php echo json_encode($extension_code); ?>,
		status: <?php echo json_encode($status); ?>,
		modules: <?php echo json_encode($modules); ?>,
		languages: <?php echo json_encode($languages); ?>,
		configLanguage: <?php echo json_encode($config_language); ?>,
		messages: <?php echo json_encode($messages); ?>,
		defaultModule: <?php echo json_encode($default_module); ?>
	};
</script>
<?php echo $footer; ?>