<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ecommerce_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '$f~s43eqrkkyp.3s:j,Qyvmc,SNr #pyuE=y)Y;r+$$qpn9nyE6(G^,_aGE&!4|p' );
define( 'SECURE_AUTH_KEY',  'LDLGNPD_<WPL!FB+Ik2Yn2.3(NK/#>^Ne(cx{/]y{rfD&8XuqNCVlN~OMLw<?Eq(' );
define( 'LOGGED_IN_KEY',    'ff&W2?s!&Ei)m;THm!)QCA*Alj,O=es<FR&ER*!>U*fN-A7uZ#4XWZ0:&SN_Q9?U' );
define( 'NONCE_KEY',        's~v6KFN$,.>l2cP:!LH%:4-z? m~O7sx|aqCSnJat>sZP(dfloS)g~`6}L+B$uI9' );
define( 'AUTH_SALT',        '.A7O0r/3}qb%EIWd<@oM.8cz,x}gY.]-Z*|LfU 0^tESp!9SlKB/7h@6#+{3RZ>X' );
define( 'SECURE_AUTH_SALT', 'H/ft3C&Z )_lb^LYs)G<7|j8$+xW*7?fjb^lH;:3]cX?.k&LJ#jo)9>jQvmW(*YI' );
define( 'LOGGED_IN_SALT',   '3wW2HznAM60hL_|W2Vm{jEc9Fdd4t;nRV1+ &bc}J~|/(S6B4+: Ye+W%TtedD.#' );
define( 'NONCE_SALT',       ']XS>!Dn#^oq3!ek?ggCq,CB_Au,4qBP1(sEGHjL4e:,R 1_~2ddq*GDOub]4<V)O' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
