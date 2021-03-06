"use strict";
// // These are important and needed before anything else
// import 'zone.js/dist/zone-node';
// import 'reflect-metadata';
//
// import { enableProdMode } from '@angular/core';
//
// import * as express from 'express';
// import { join } from 'path';
//
// // Faster server renders w/ Prod mode (dev mode never needed)
// enableProdMode();
//
// // Express server
// const app = express();
//
// //@mz - not need because we run on aws lambda
// // const PORT = process.env.PORT || 4000;
// const DIST_FOLDER = join(process.cwd(), 'dist');
//
// // * NOTE :: leave this as require() since this file is built Dynamically from webpack
// const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/main');
//
// // Express Engine
// import { ngExpressEngine } from '@nguniversal/express-engine';
// // Import module map for lazy loading
// import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
//
// app.engine(
//     'html',
//     ngExpressEngine (
//         {
//             bootstrap: AppServerModuleNgFactory,
//             providers: [
//                 provideModuleMap(LAZY_MODULE_MAP)
//             ]
//         }
//     )
// );
// //
// app.set('view engine', 'html');
// app.set('views', join(DIST_FOLDER, 'browser'));
//
// // TODO: implement data requests securely
// app.get('/api/*', (req, res) => {
//     res.status(404).send('data requests are not supported');
// });
//
// // Server static files from /browser
// app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));
//
// // All regular routes use the Universal engine
// app.get('*', (req, res) => {
//     res.render('index', { req });
// });
//
// // @mz - disable because we run on lambda
// // Start up the Node server
// // app.listen(PORT, () => {
// //     console.log(`Node server listening on http://localhost:${PORT}`);
// // });
//
// //@mz - nedd for run on lambda
// import * as awsServerlessExpress from 'aws-serverless-express';
// import {Handler} from "aws-lambda";
//
//
// // const server = awsServerlessExpress.createServer(app);
exports.__esModule = true;
// import * as serverJs from './server.js'
// import {Handler} from "aws-lambda";
// const handler: Handler = serverJs.handler;
// function (event, context, callback) {
//     console.log('awsServerlessExpress 4 - event, context, callback', event, context, callback);
//
//     // context.succeed({ 'status' : 1 });
//     // awsServerlessExpress.proxy(server, event, context)
// }
// export {handler}
// generated by @ng-toolkit/serverless
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
var awsServerlessExpress = require("aws-serverless-express");
var server = require('./dist/server');
var binaryMimeTypes = [
    'application/javascript',
    'application/json',
    'application/octet-stream',
    'application/xml',
    'image/jpeg',
    'image/png',
    'image/gif',
    'text/comma-separated-values',
    'text/css',
    'text/html',
    'text/javascript',
    'text/plain',
    'text/text',
    'text/xml',
    'image/x-icon',
    'image/svg+xml',
    'application/x-font-ttf'
];
server.app.use(awsServerlessExpressMiddleware.eventContext());
var serverProxy = awsServerlessExpress.createServer(server.app, null, binaryMimeTypes);
exports.handler = function (event, context) {
    console.log('123');
    return awsServerlessExpress.proxy(serverProxy, event, context);
};
