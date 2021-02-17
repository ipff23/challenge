"use strict";

// Print all entries, across all of the sources, in chronological order.

module.exports = (logSources, printer) => {
  return new Promise((resolve, reject) => {
    logSources
      .map((logEntry) => logEntry.pop())
      .sort((prev, current) => {
        return prev.date.getTime() - current.date.getTime();
      })
      .forEach((logEntry) => {
        printer.print(logEntry);
      });

    printer.done();

    resolve(console.log("Sync sort complete."));
  });
};
