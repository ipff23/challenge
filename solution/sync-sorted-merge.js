"use strict";

// Print all entries, across all of the sources, in chronological order.

module.exports = async (logSources, printer) => {
  const logSourcesPromises = logSources.map(
    async (logEntry) => await logEntry.popAsync()
  );

  const logSourcesResolved = await Promise.all(logSourcesPromises);

  logSourcesResolved
    .sort((prev, current) => {
      return prev.date.getTime() - current.date.getTime();
    })
    .forEach((logEntry) => {
      printer.print(logEntry);
    });

  printer.done();
  return console.log("Sync sort complete.");
};
