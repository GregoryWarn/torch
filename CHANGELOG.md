# Change Log

## Middle Kingdom - v10 branch

### 2.0.0 - [TBD]
   - [BREAKING] (Lupestro) This release supports v10 of Foundry - but only v10 and hopefully some way well beyond it. 
   - [FEATURE] (Lupestro) Now supports selection among a variety of light sources on right-click menu from torch button - a long time coming, I know.
     * Bullseye Lantern has cone beam on token facing.
     * Hooded Lantern toggles on-dim-off on click.
     * Candle and Torch consume inventory, indicate when exhausted.
     * Limitations:
       * Aside from existing Dancing Lights behavior, light sources remain carried by the actor 
       * One actor may have only one light source active per scene at a time. 
       * Right now, aside from a generalized actor-token light capability, we only support specific light sources in DnD5e today, but we're poised for growth there.
       * No support **_yet_** for setting a light source down and stepping away. 
         - There are subtleties once these things have identity.
           - Can somebody else turn them on? Do they cease to belong to your actor?
           - What are the rules for interacting with placed light sources?
           - How do you avoid turning off the wrong one?
           - Do they remain placed after being turned off? 
           - Where do you have to be to turn them off?
         - There's stuff to work out and I wanted to get this out there first.
         - We can use the existing logic supporting Dancing Lights as the basis for a very limited implementation with one active light source per actor per scene, but would that be satisfying? We're getting into "piles" territory.
       * We probably won't get too deep into spells beyond the two cantrips we support  
         - The PHB only lists 7 other spells with explicit light effects
         - All the spells except Continual Flame and Daylight have other effects - weapon, damage, etc - that you'd want a more sophisticated module to deliver.
         - We could offer the Produce Flame cantrip as a half-sized Light cantrip without its thrown weapon effect, but would that be satisfying?
         - Anything that consumes spell slots (including Continual Flame and Daylight) should probably be invoked as a normal spell rather than a light source anyway.
        * We might do better to integrate light into other modules dealing with objects than to let this get too sophisticated.

   - [INTERNAL] (Lupestro) Separated concerns into multiple js files and a CSS file
      * The additional UI and the more complex state finally made it necessary.
      * Separate root, hud, token, settings, light sources, socket comms are much easier to follow.
      * This will make planned future work much easier as well.
      * The mere thimble of HTML needed is fine sitting in the top of the hud.js for now.

## Intermediate period - master branch

### 1.4.4 - March 19, 2022
  - [BUGFIX] (Lupestro) Dancing Lights now work better for players - sends entire create / remove cycle to GM when users lack permissions on tokens.
### 1.4.3 - December 17, 2021
  - [CLEANUP] (Lupestro) Bumped official compatibility to Foundry 9, after testing with final test version. No code change.
### 1.4.2 - October 31, 2021 
  - [FEATURE] (Lupestro) Now works in Foundry 9, but still works in Foundry 7 and 8.
  - [BUGFIX] (Lupestro) Function in Foundry 7 is restored - it had broken in restructuring.
  - [INTERNAL] (Lupestro) Established test foundation - explicit cases, worlds, automation, fluid dev->test. 
### 1.4.1 - October 23, 2021 
  - [BUGFIX] (Lupestro) Fixed bug in restructuring that broke features for non-DnD5e.
### 1.4.0 - October 23, 2021
  - [BUGFIX] (C-S-McFarland) Fix for bug when you have torch and light spell.
  - [INTERNAL] (Lupestro) Major restructuring with cleanup of race conditions.
### 1.3.2 - June 29, 2021 
  - [FEATURE] (Lupestro, zarmstrong, lozalojo) Spanish updates and URL in module.json
### 1.3.1 - June 29, 2021 
  - [FEATURE] (Lupestro) Updated zh-tw translation from zeteticl and pt-br translation from rinnocenti to 100% of strings. Thanks y'all!
### 1.3.0 - June 25, 2021 
  - [FEATURE] (Lupestro) Incorporated pending Taiwan Chinese and Brazilian Portuguese translations from zeteticl and rinnocenti.
### 1.2.1 - June 11, 2021 
  - [CLEANUP] (Lupestro) Cleaned up console logging noise I had created
### 1.2.0 - June 10, 2021 - 
  - [FEATURE] (Lupestro) Updated for 0.8.6, but ensured it still functions in 0.7.x.

## Old Kingdom - master branch

Everything from here down has needed to be pieced together from unearthed inscriptions (the GIT history.)

* 1.1.4 - October 21, 2020 - (Stephen Hurd) Marked as 0.7.5 compatible.
* 1.1.3 - October 18, 2020 - (Stephen Hurd) Fix spelling.
* 1.1.2 - October 18, 2020 - (Stephen Hurd) Fix JSON syntax.
* 1.1.1 - October 18, 2020 - (Stephen Hurd) Name adjustment.
* 1.1.0 - October 18, 2020 - (Jose E Lozano) Add Spanish, 
                             (Stephen Hurd) Fix bright/dim radius of Dancing Lights.
* 1.0.9 - May 28, 2020 - (Stephen Hurd) Marked as 0.6.0 compatible.
* 1.0.8 - May 19, 2020 - (Aymeric DeMoura) Add French, Marked as 0.5.8 compatible.
* 1.0.7 - April 29, 2020 - (Stephen Hurd) Add Chinese, fix torch inventory usage.
* 1.0.6 - April 18, 2020 - (Stephen Hurd) Fix dancing lights removal.
* 1.0.5 - April 18, 2020 - (Stephen Hurd) Remove socket code for dancing lights removal.
* 1.0.4 - April 18, 2020 - (Stephen Hurd) Update to mark as 0.5.4 compatible.
* 1.0.3 - April 15, 2020 - (MtnTiger) - Updated with API changes.
* 1.0.2 - January 22, 2020 - (Stephen Hurd) Update for 0.4.4.
* 1.0.1 - November 26, 2019 - (Stephen Hurd) - Use await on all promises.
* 1.0.0 - November 25, 2019 - (Stephen Hurd) - Add support for Dancing Lights.
