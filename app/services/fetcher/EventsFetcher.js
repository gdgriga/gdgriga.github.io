// EventsFetcher fetches events from different sources
// fetch() return promise with response object
// All sourceResolvers should have fetch() method that return promise
class EventsFetcher {
  constructor(sourceResolver) {
    console.log(sourceResolver)
    this.sourceResolver = sourceResolver;
  }

  fetch() {
    return this.sourceResolver.fetch()
  }
}

export default EventsFetcher;
