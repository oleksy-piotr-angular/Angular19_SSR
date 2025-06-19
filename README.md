# AngularSsr

SOURCE: https://www.youtube.com/watch?v=6Wn3sy0j4so&list=PL_euSNU_eLbc91j2QvA_URGFwbHZsjS95&ab_channel=LeelaWebDev

169. 🌟 Angular 19 Server-Side Rendering Explained: Fast, SEO-Friendly, & Beginner-Friendly Guide! 🚀
170. Angular 19 HttpClient Caching Explained for both Get & Post Requests using includePostRequests
171. 🚀 Angular 19 SSR afterNextRender for implementing Browser-Only Logic! 🌐
172. 🎯 Prerendering Magic in Angular 19: Standalone Components for Static Pages! ✨📦
     https://v19.angular.dev/guide/prerendering

     Commands:

     - npm start #execute "ng serve"

173. Setup Nodejs Api Server using Express for making Api calls in the Angular 19 SSr Pre-rendering

     Commands:

     - node node-main.js #to run node server

174. Prerender unparameterized static routes in Angular 19 SSR using config object with Routes File

     https://v19.angular.dev/guide/prerendering


    Commands:

    - npm run build

    On default all not parametrized Routes will be Static with SSR.
    We can define which Routes should be static generated as static on build with "route.txt" settings

175. Prerender the Parametrized dynamic routes in Angular 19 SSR for SEO Load Time Improve
     https://v19.angular.dev/guide/prerendering
     routesFile The path to a file that contains a list of all routes to prerender, separated by newlines. This option is useful if you want to prerender routes with parameterized URLs.

     Commands to serve:

     - npm run serve:ssr:angular-ssr

176. 🌐 "Hybrid Rendering in Angular 19 🔥 Combine SSR, CSR & SSG for Next-Level Apps!"


    Command:

      - ng new --ssr --server-routing

      Need to run this order of commands
      1. npm run build
      2. npm run serve:ssr:angular-server

      3. npm run watch #rebuild after code will be changed by developer

      NOTE!: if there is no changes after rebuild the code than try rerun
      "npm run serve:ssr:angular-server"

177. Customizing build-time prerendering using Parameterized routes & Fallback strategies Angular 19

NOTE: "Prerendered 2 static routes." after "npm run build" command

178. ✨ Angular SSR Magic: REQUEST, RESPONSE_INIT, and REQUEST_CONTEXT Demystified! 🪄
179. 🖥️ Angular 19 Hydration: The Ultimate Guide to Smooth SSR with No Flickers! 💡🚀


    What is Hydration?
    https://angular.dev/guide/hydration

180. 🔥 Master Angular Hydration! 🌐 SSR Tips, Event Replay & Debugging Secrets Revealed!


    If you want to check Angular hydration you need to obviously serve with SSR:
    "npm run serve:ssr:<Project-Name>"

    You should "Inspect" and click angular Tab but in my case it "Angular application not detected".

    So I check "npm run start" and on localhost:4200 I've seen hydrated Components on Inspect > Angular tab
    ____________
    IMPORTANT!!!
    ____________

    to use Angular DevTools with SSR build we need to build project in
    development mode

    It is possible when you run command:

    "npm run buildDev #this script was created by me"

    or

    "npm run watch"

    then serve it with Node JS Express:

    "npm run serve:ssr:angular-server"

    "withEventReplay()"
    :
    [https://angular.dev/api/platform-browser/withEventReplay]
    Enables support for replaying user events (e.g. clicks) that happened on a page before hydration logic has completed. Once an application is hydrated, all captured events are replayed and relevant event listeners are executed.

181. ❌ Avoid These Hydration Errors and Constraints! 🛑 Top Mistakes Killing Your Angular App 🚨

!!IMPORTANT!! if app is not refreshed in SSR mode when you make any changes in your template then: "CTRL+SHIFT+R" in CHROME

    Avoid components that manipulate DOM using native DOM APIs or using "innerHTML", "outerHTML".
    f.e.
    - accessing the document,
    - querying for specific elements,
    - injecting additional nodes using "appendChild"
    - detaching DOM nodes and moving tem to the other location

    REASON:
    [Angular is unaware of these DOM changes and cannot resolve them during the hydration process]

---

    Be sure to type correct HTML structure when you creating a template HTML code.

---

    Hydration Constraints:
    https://angular.dev/guide/hydration#constraints

    Error Encyclopedia:
    https://angular.dev/errors

HOW to Skip Hydration for Particular Component:
"https://angular.dev/guide/hydration#how-to-skip-hydration-for-particular-components"

182. 📊 Angular @defer Magic: Optimize Loading with Placeholders, Errors & Triggers! 💻✨

Defer loading with Angular:
"https://angular.dev/guide/templates/defer"

NOTE! it has been shown in project without SSR
it should create extra "chunk-<SOME-STRING>.js" file with lazy loaded component which loading has been defer.

183. 🎯 @defer Triggers EXPLAINED! Lazy Load Content💡 Step-by-Step to Improve Performance FAST! 💻


    More info:
    "https://angular.dev/guide/templates/defer"

184. 🛠️ Angular @defer Testing Tips & Tricks! 🎯 Perfect Your Skills with This Guide 🚀
     More info:
     "https://angular.dev/guide/templates/defer#testing-defer-blocks"

     Commands in terminal "/angular-defer$":
     npm test

185. 🔥 Angular Incremental Hydration 🔥 Boost FID, Reduce CLS & Improve UX Now! 🚀
     Note:
     Review everything you learned during this tutorial in this chapter.

186. Controlling hydration of content with triggers - Angular 19 Incremental Hydration

     More info:
     "https://angular.dev/guide/incremental-hydration"

     Note:
     Incremental hydration is an advanced type of hydration that can leave sections of your application dehydrated and incrementally trigger hydration of those sections as they are needed.

MORE INFO in ANGULAR DOCUMENTATION:
"https://angular.dev/guide/performance"

REMEMBER:
If you working with SSR and you want to see an effect you need to:

1. build an app in development mode:
   "ng build --configuration development"

2. serve this App with Node express using this command:
   npm run serve:ssr:<PROJECT-NAME>
