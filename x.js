console.log("Name: Yogesh Borhade");
console.log("Class: TE");
console.log("Subject: LP-II Web Application Development");
console.log("We are implementing Assignment-2B");


// (c) Microsoft Corporation. All rights reserved.

// C:\Users\Lenovo>docker images
// REPOSITORY   TAG       IMAGE ID   CREATED   SIZE

// C:\Users\Lenovo>docker pc
// docker: 'pc' is not a docker command.
// See 'docker --help'

// C:\Users\Lenovo>docker ps
// CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

// C:\Users\Lenovo>docker pull openjdk
// Using default tag: latest
// latest: Pulling from library/openjdk
// 197c1adcd755: Pull complete
// 57b698b7af4b: Pull complete
// 95a27dbe0150: Pull complete
// Digest: sha256:9b448de897d211c9e0ec635a485650aed6e28d4eca1efbc34940560a480b3f1f
// Status: Downloaded newer image for openjdk:latest
// docker.io/library/openjdk:latest

// What's Next?
//   View a summary of image vulnerabilities and recommendations → docker scout quickview openjdk

// C:\Users\Lenovo>
// C:\Users\Lenovo>docker run --name JAVA -it -d jshell
// Unable to find image 'jshell:latest' locally
// docker: Error response from daemon: pull access denied for jshell, repository does not exist or may require 'docker login': denied: requested access to the resource is denied.
// See 'docker run --help'.

// C:\Users\Lenovo>docker run --name JAVA -it -d jshell

// C:\Users\Lenovo>docker run --name JAVA -it -d openjdk
// 760fba901ff5d23cd24f6ba323c985b146e5d4470fef6a5b6bc004dc666e9186

// C:\Users\Lenovo>docker ps
// CONTAINER ID   IMAGE     COMMAND    CREATED         STATUS         PORTS     NAMES
// 760fba901ff5   openjdk   "jshell"   7 seconds ago   Up 5 seconds             JAVA

// C:\Users\Lenovo>docker images
// REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
// openjdk      latest    71260f256d19   14 months ago   470MB

// C:\Users\Lenovo>docker exec -it jshell
// "docker exec" requires at least 2 arguments.
// See 'docker exec --help'.

// Usage:  docker exec [OPTIONS] CONTAINER COMMAND [ARG...]

// Execute a command in a running container

// What's next?
//   Try Docker Debug for seamless, persistent debugging tools in any container or image → docker debug jshell
//   Learn more at https://docs.docker.com/go/debug-cli/

// C:\Users\Lenovo>docker exec -it JAVA jshell
// |  Welcome to JShell -- Version 18.0.2.1
// |  For an introduction type: /help intro

// jshell> a=10
// |  Error:
// |  cannot find symbol
// |    symbol:   variable a
// |  a=10
// |  ^

// jshell> int a=10;
// a ==> 10

// jshell> int b=10;
// b ==> 10

// jshell> System.out.println(a+b);
// 20

// jshell> exit
// |  Error:
// |  cannot find symbol
// |    symbol:   variable exit
// |  exit
// |  ^--^

// jshell> /exit
// |  Goodbye

// What's next?
//   Try Docker Debug for seamless, persistent debugging tools in any container or image → docker debug JAVA
//   Learn more at https://docs.docker.com/go/debug-cli/

// C:\Users\Lenovo>docker ps
// CONTAINER ID   IMAGE     COMMAND    CREATED         STATUS         PORTS     NAMES
// 760fba901ff5   openjdk   "jshell"   2 minutes ago   Up 2 minutes             JAVA

// C:\Users\Lenovo>docker rm ps 760fba901ff5
// Error response from daemon: No such container: ps
// Error response from daemon: cannot remove container "/JAVA": container is running: stop the container before removing or force remove

// C:\Users\Lenovo>docker container rm 760fba901ff5
// Error response from daemon: cannot remove container "/JAVA": container is running: stop the container before removing or force remove

// C:\Users\Lenovo>docker stop 760fba901ff5
// 760fba901ff5

// C:\Users\Lenovo>docker container rm 760fba901ff5
// 760fba901ff5

// C:\Users\Lenovo>docker ps
// CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

// C:\Users\Lenovo>
// C:\Users\Lenovo>docker images
// REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
// openjdk      latest    71260f256d19   14 months ago   470MB

// C:\Users\Lenovo>docker images prune
// REPOSITORY   TAG       IMAGE ID   CREATED   SIZE

// No images found matching "prune": did you mean "docker image prune"?

// C:\Users\Lenovo>docker image prune
// WARNING! This will remove all dangling images.
// Are you sure you want to continue? [y/N] y
// Total reclaimed space: 0B

// C:\Users\Lenovo>docker images
// REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
// openjdk      latest    71260f256d19   14 months ago   470MB

// C:\Users\Lenovo>docker image rm 71260f256d19
// Untagged: openjdk:latest
// Untagged: openjdk@sha256:9b448de897d211c9e0ec635a485650aed6e28d4eca1efbc34940560a480b3f1f
// Deleted: sha256:71260f256d19f4ae5c762601e5301418d2516ca591103b1376f063be0b7ba056
// Deleted: sha256:47e38970bbdeed3c53a02995da4b5472f885d2e02a327e3bada6027f9506b1ee
// Deleted: sha256:7d9436acccd4d14ca79fb09a4573fe353d70a0485b25e7ef0fcfae2b90ba88cc
// Deleted: sha256:9cd9df9ffc972e9abc946d855162ef0c40dff9a89f10c962b7920154a3d943d8

// C:\Users\Lenovo>docker images
// REPOSITORY   TAG       IMAGE ID   CREATED   SIZE

// C:\Users\Lenovo>