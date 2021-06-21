# Spiral Borehole Model

Mathematical model: Paul Pastusek ([SPE84448](https://onepetro.org/SPEATCE/proceedings-abstract/03ATCE/All-03ATCE/SPE-84448-MS/137797))

Implementation: Daniel Dupriest

License: MIT

Demo installation: [dev.hypersweet.com/bhpfm/](http://dev.hypersweet.com/bhpfm/)

This application is a simulation of a spiral borehole model which is generated from various conditions. Parameters such as RPM, rock strength, gauge length, ROP, etc. can be specified, and the resulting borehole pattern is rendered. A high-contrast "Present" mode is available for display on screen or with a projector.

![Screenshot](screenshot.png)

## Development

Ensure that node and npm are installed and up to date.

1. Clone the repository and change to the root directory.
2. Run `npm install`.
3. Run `npm start`.

## Building and Deployment

1. Navigate to project root directory.
2. Run `npm run build`.
3. Copy the contents of `/build` into the directory from which you wish to serve the files.

### Serving from a subdirectory

If you will be serving the application from a subdirectory:

1. Open `package.json` and add (or modify) the line `"homepage": "http://yourserver.com/subdirectory"` to reflect your installation.
2. Build and deploy following the above steps.
