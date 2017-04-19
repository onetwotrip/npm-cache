0.10.3
-----
fixing name issue when installing package

0.10.2
-----
Delete non archive cache directory if it has no 'node_modules' or similar folder inside
Delete non archive cache directory if the 'node_modules' or similar folder is empty

0.10.1
-----
add cwd/node_modules/.bin to PATH
fixing reverse link installation when installed fresh dependencies because there is no cached dependencies

0.10.0
-----
add typings capabilities

0.9.0
-----
launching npm run prepublish after installing cached dependencies if they exist

0.8.7
-----
FIxing a bug preventing deletion of the symbolic link when the symbolic lynk is not pointing to anything
