
//Login
/login/otp
/otp/verify

// Constant
router.get('/constant', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewConstant);
router.get('/home', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewHomeProducts);
router.post('/nearstore', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), validate(nearestStoreSchema), viewNearestDarkstore);

// Profile
router.get('/profile', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewProfile);
router.put('/profile', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), photoUpload, viewUpdateProfile);

// Address
router.post('/address', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewCreateAddress);
router.put('/addresses/:id', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewUpdateAddress);
router.get('/addresses', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewAddresses);
router.get('/addresses/:id', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewAddressesById);
router.delete('/addresses/:id', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewDeleteAddress);

// Order
router.get('/orders', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewOrders);
router.get('/orders/:id', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewOrdersById);

// Banner
router.get('/banners', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewBanners);

// Promocode
router.get('/promocodes', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewPromocodes);
router.get('/promocodes/:id', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewPromocodeById)

// Brand
router.get('/brands', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewBrands);
router.get('/brands/:id', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewBrandsById)

// Main Categories
router.get('/maincategories', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewMainCategories);

// Categories
router.get('/categories/:id', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewCategory)

// Sub Categories
router.get('/subcategories/:id', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewSubcategory)

// Products
router.get('/products/:id', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewProduct)

// SKU
router.get('/skus/search', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewSearchSKUs)
router.get('/skus/:id', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewSKU)

// Payments
// router.get('/payments', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewpayments);
// router.get('/payments/:id', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewpaymentsById)

// Restaurant
router.get('/restaurants', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewRestaurants);
router.get('/restaurants/categories', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewFoodCategories);
router.get('/restaurants/categories/:id', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewFoodCategoryById);
router.get('/restaurants/subcategory/:id', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewRestaurantSubcategory);
router.get('/restaurants/products/:id', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewRestaurantProducts)
router.get('/restaurants/sku/:id', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewSKU)

// Cafe
router.get('/cafe', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewCafe);

// Cart
router.get('/cart', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewCart)
router.post('/cart', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewAddToCart)
router.put('/cart', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewUpdateCartItemQuantity)
router.delete('/cart/clear', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewClearCart)
router.delete('/cart/:id', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewDeleteCartItem)

// Order
router.post('/order', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), validate(orderSchema), viewCreateOrder)

// Printer
// router.get('/printers', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewPrinters);
// router.get('/printers/:id', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewPrinterById)

// Alerts
router.get('/alerts', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), viewAlerts);

// Suggest
router.post('/suggestions', authenticateToken, checkUserRole(Role.USER, Role.ADMIN, Role.CAFE, Role.RESTAURANT, Role.RIDER, Role.VENDOR), validate(orderSchema), viewCreateSuggestions);

export default router;