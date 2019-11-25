# zippy-logger

A logger implementation for Winston logger that offers easy logging for errors, infos and warnings

## Usage

    const { logError, logWarning, logInfo } = require('zippy-logger')

    logError({message: 'Sample error message', path: 'path where it occured'})
    logWarning({message: 'Sample warning message', path: 'path where it occured'})
    logInfo({message: 'Sample info message', path: 'path where it occured'})

  

## Parameters

- message: You can give a custom error message or the default error message you receive when catching error

- path: You can specify a custom path for the error

  

## Log message format

  

Every log will be saved within the "logs" folder in your working directory.

Logs will be writen in files with YYYY-MM-DD.log name format. As for the format of the logged messaage it will be as follows:

    [timestamp] | level | path - message

where level is either "error", "warn" or "info" and path and message are as you passed them during logging

  