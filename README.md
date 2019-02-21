# Migrating AngularJs to Angular 2+

This is a sample application to demonstrate how we can migrate our AngularJs application to Angular 2+. There are multiple steps involved to help with the migration process over a period of time (i.e. 3 ~ 6 months).

The fundamental idea is to migrate one component/module at a time while having AngularJs and Angular 2+ running in parallel. The application will continue to function during the entire migration process.

There are some necessary steps we need to do before we can start migrating and it is strongly recommended that we take this chance to properly refactor our code, add adequate tests and utilize some powerful tools to make our code base more manageable.

You will find 5 branches in this repository corresponding to 5 different stages of the sample app:

* [Stage 0: application with no tests and needs refactoring][Stage 0]
* [Stage 1: refactored and tested code][Stage 1]
* [Stage 2: hybrid application running both AngularJs and Angular 2+][Stage 2]
* Stage 3: fully migrated application
* Stage 4: adopting TypeScript

[Stage 0]: https://github.com/yizhangflynn/Angularjs-Angular-Migration/tree/Stage-0-application-with-no-tests-and-needs-refactoring
[Stage 1]: https://github.com/yizhangflynn/Angularjs-Angular-Migration/tree/Stage-1-refactored-and-tested-code
[Stage 2]: https://github.com/yizhangflynn/Angularjs-Angular-Migration/tree/Stage-2-hybrid-application-running-both-AngularJs-and-Angular-2+