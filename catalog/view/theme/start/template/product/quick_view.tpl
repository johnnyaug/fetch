<?php $kuler = Kuler::getInstance(); $theme = $kuler->getTheme(); ?>
<!doctype html>
<html class="quickview">
<head>
	<title><?php echo $heading_title; ?></title>
	<base href="<?php echo $base; ?>" />
	<?php
	$kuler->addStyle(array(
		"catalog/view/javascript/bootstrap/css/bootstrap.min.css",
		"catalog/view/theme/$theme/stylesheet/_grid.css",
		"catalog/view/theme/$theme/stylesheet/stylesheet.css",
		"catalog/view/javascript/font-awesome/css/font-awesome.min.css",
	));
	?>
	<!-- {STYLES} -->
	<?php
	$kuler->addScript(array(
		'catalog/view/javascript/jquery/jquery-1.7.1.min.js',
		'catalog/view/javascript/jquery/ui/jquery-ui-1.8.16.custom.min.js',
		'catalog/view/javascript/common.js',
		"catalog/view/theme/$theme/js/utils.js"
	));
	?>
	<!-- {SCRIPTS} -->
</head>
<body class="<?php echo $kuler->getBodyClass(); ?>">
<div id="content">
	<div class="product-info">
    <div class="row">
      <?php if ($thumb || $images) { ?>
      <div class="left col-lg-4 col-sm-5">
        <?php if ($thumb) { ?>
        <div class="image">
	        <a href="<?php echo $product_url; ?>" target="_top" title="<?php echo $heading_title; ?>" >
		        <img src="<?php echo $thumb; ?>" title="<?php echo $heading_title; ?>" alt="<?php echo $heading_title; ?>" />
	        </a>
        </div>
        <?php } ?>
      </div>
      <?php } ?>
      <div class="right col-lg-8 col-sm-7">
        <h1><?php echo $heading_title; ?></h1>
        <div class="description">
          <?php if ($manufacturer) { ?>
          <span><?php echo $text_manufacturer; ?></span> <a href="<?php echo $manufacturers; ?>" target="_top"><?php echo $manufacturer; ?></a><br />
          <?php } ?>
          <span><?php echo $text_model; ?></span> <?php echo $model; ?><br />
          <?php if ($reward) { ?>
          <span><?php echo $text_reward; ?></span> <?php echo $reward; ?><br />
          <?php } ?>
          <span><?php echo $text_stock; ?></span> <?php echo $stock; ?>
        </div>
        <?php if ($price) { ?>
        <div class="price">
          <?php if (!$special) { ?>
          <?php echo $price; ?>
          <?php } else { ?>
          <span class="price-old"><?php echo $price; ?></span> <br /><span class="price-new"><?php echo $special; ?></span>
          <?php } ?>
          <br />
          <?php if ($tax) { ?>
          <div class="price-tax"><?php echo $text_tax; ?> <?php echo $tax; ?></div>
          <?php } ?>
          <?php if ($points) { ?>
          <span class="reward"><?php echo $text_points; ?> <?php echo $points; ?></span>
          <?php } ?>
          <?php if ($discounts) { ?>
          <div class="discount">
            <?php foreach ($discounts as $discount) { ?>
            <?php echo sprintf($text_discount, $discount['quantity'], $discount['price']); ?><br />
            <?php } ?>
          </div>
          <?php } ?>
        </div>
        <?php } ?>
        <?php if ($review_status) { ?>
	        <div class="product-rating">
		        <?php for ($i = 1; $i <= 5; $i++) { ?>
			        <?php if ($rating < $i) { ?>
				        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span>
			        <?php } else { ?>
				        <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
			        <?php } ?>
		        <?php } ?>
	        </div>
        <?php } ?>
	      <div class="product-description">
		      <?php if ($limit = $kuler->getSkinOption('product_description_limit')) { ?>
			      <?php echo substr(strip_tags($description), 0, $limit) . "..."; ?>
		      <?php } else { ?>
			      <?php echo $description; ?>
		      <?php } ?>
	      </div>
	      <button class="product-detail-button product-detail-button--cart" type="button" data-toggle="tooltip" title="<?php echo $button_cart; ?>" onclick="cart.add('<?php echo $product['product_id']; ?>');">
		      <i class="fa fa-shopping-cart"></i>
		      <?php echo $button_cart; ?>
	      </button>
	      <button class="product-detail-button">
		      <a href="<?php echo $product_url; ?>" target="_top" class="button">
			      <i class="fa fa-eye"></i>
			      <?php echo $kuler->translate($kuler->getSkinOption('more_details_button_text')); ?>
		      </a>
	      </button>
      </div>
  </div>
	</div>
</div>
<script>
	$('#add_to_cart').on('click', function (evt) {
		evt.preventDefault();

		parent.window.addToCart(<?php echo $product_id; ?>)
	});

	$('.image-additional a').on('click', function () {
		$('#main-image').attr('src', this.href);

		return false;
	});
</script>
<!-- {BODY_SCRIPTS} -->
</body>
</html>