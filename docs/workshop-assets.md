# Workshop screenshot review

The initial 12 supplied screenshots were visually inspected. Weather and Blackjack
captures remain public with original filenames. Six additional user-supplied
sanitized captures have now been visually reviewed and added to the Task Manager
and Chicken Flock Manager sections. Ten screenshots are used in the case study.
The portfolio implementation does not edit or generate screenshot content.

Six originals were moved from public/images/workshop to the same relative paths
under private-assets/workshop. That folder is Git-ignored and outside Vite's public
directory so the originals are excluded from production builds:

- TaskManager/TaskList_Main.png: personal tasks and dates.
- TaskManager/TaskList_AddTaskModal.png: personal tasks visible behind the dialog.
- ChickenManager/ChickenManager_Main.png: private camera and flock/health information.
- ChickenManager/ChickenManager_Supplies.png: private camera and health summary.
- ChickenManager/ChickenManager_Tasks.png: private camera and health summary.
- MainPage.png/MainPage.png: personal tasks in the dashboard card.

Do not return these unmodified originals to a public directory.

## Sanitized replacements

- TaskManager/TaskManager_Main.png
- TaskManager/TaskManager_AddTaskModal.png
- ChickenManager/ChickenManager_MainPage.png
- ChickenManager/ChickenManager_HealthLog.png
- ChickenManager/ChickenManager_FlockList.png (shows Feed & Supplies inventory; original filename preserved)
- ChickenManager/ChickenManager_Tasks&Maintenance.png

These replacements are identified by the user as sanitized and approved for the
page. The flock captures contain sanitized bird and health content and a static
coop preview within the image. No camera URL or live stream is connected. Captions
distinguish that static preview from a live feed. The older sensitive originals
remain withheld. Both temporary placeholders have been replaced with galleries.

No required screenshot assets remain outstanding. An optional dashboard hero would
still need a sanitized capture before use.

The page has no demo links or connections to the local Blazor application,
databases, or camera stream. No Blazor files were changed.
