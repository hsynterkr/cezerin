// config used by server side only
const dbHost = process.env.DB_HOST || "ds137643.mlab.com";
const dbPort = process.env.DB_PORT || 37643;
const dbName = process.env.DB_NAME || "market_place";
const dbUser = process.env.DB_USER || "craft";
const dbPass = process.env.DB_PASS || "147258craft";
const dbCred =
	dbUser.length > 0 || dbPass.length > 0 ? `${dbUser}:${dbPass}@` : '';

const dbUrl =
	process.env.DB_URL || `mongodb://${dbCred}${dbHost}:${dbPort}/${dbName}`;

module.exports = {
	// used by Store (server side)
	apiBaseUrl: `http://localhost:3001/api/v1`,

	// used by Store (server and client side)
	ajaxBaseUrl: `http://localhost:3001/ajax`,

	// Access-Control-Allow-Origin
	storeBaseUrl: '*',

	// used by API
	adminLoginUrl: '/admin/login',

	apiListenPort: 3001,
	storeListenPort: 3000,

	// used by API
	mongodbServerUrl: dbUrl,

	smtpServer: {
		host: '',
		port: 0,
		secure: true,
		user: '',
		pass: '',
		fromName: '',
		fromAddress: ''
	},

	// key to sign tokens
	jwtSecretKey: 'SP69kXFR3znRi7kL8Max2GTB24wOtEQj',

	// key to sign store cookies
	cookieSecretKey: '8669X9P5yI1DAEthy1chc3M9EncyS7SM',

	// path to uploads
	categoriesUploadPath: 'public/content/images/categories',
	productsUploadPath: 'public/content/images/products',
	filesUploadPath: 'public/content',
	themeAssetsUploadPath: 'theme/assets/images',

	// url to uploads
	categoriesUploadUrl: '/images/categories',
	productsUploadUrl: '/images/products',
	filesUploadUrl: '',
	themeAssetsUploadUrl: '/assets/images',

	// store UI language
	language: 'en',

	// used by API
	orderStartNumber: 1000
};
