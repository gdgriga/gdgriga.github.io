import fetch from 'isomorphic-fetch';

// FileResolver is a resolver to load object by file location
class FileResolver {
  constructor(fileLocation) {
    this.fileLocation = fileLocation;
  }

  fetch() {
    return fetch(this.fileLocation)
    .then(response => response.json());
  }
}

export default FileResolver;
