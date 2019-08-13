jQuery("#simulation")
  .on("click", ".m-d757b3b2-8d51-4b67-b608-a669620245c1 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-d757b3b2-Label_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-d757b3b2-Label_38")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/12fbc2ef-0a15-4183-b041-3adfd08784c6"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-d757b3b2-Label_37")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f634e67a-1b29-4f42-87f8-c684becfee35"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-d757b3b2-Label_39")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb276949-43bb-45f0-8960-2ae10eca9157"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-d757b3b2-Button_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1cc59dfa-78a5-47f5-99f0-1aac250e12c0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1cc59dfa-78a5-47f5-99f0-1aac250e12c0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-d757b3b2-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/900ac631-ae65-44eb-a5c0-c532b253c780"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".m-d757b3b2-8d51-4b67-b608-a669620245c1 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#m-d757b3b2-Label_26") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-d757b3b2-8d51-4b67-b608-a669620245c1 #m-d757b3b2-Label_26": {
                      "attributes": {
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px",
                        "background-color": "#EEEEEE",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#EEEEEE",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#EEEEEE",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#EEEEEE",
                        "border-radius": "3px 3px 3px 3px"
                      },
                      "expressions": {
                        "width": "Math.max(75 - 1 - 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(30 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#m-d757b3b2-8d51-4b67-b608-a669620245c1 #m-d757b3b2-Label_26": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#EEEEEE",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#EEEEEE",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#EEEEEE",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px",
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(75 - 1 - 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(30 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-d757b3b2-Label_37") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-d757b3b2-8d51-4b67-b608-a669620245c1 #m-d757b3b2-Label_37": {
                      "attributes": {
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px",
                        "background-color": "#EEEEEE",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#EEEEEE",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#EEEEEE",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#EEEEEE",
                        "border-radius": "3px 3px 3px 3px"
                      },
                      "expressions": {
                        "width": "Math.max(113 - 1 - 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(30 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#m-d757b3b2-8d51-4b67-b608-a669620245c1 #m-d757b3b2-Label_37": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#EEEEEE",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#EEEEEE",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#EEEEEE",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px",
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(113 - 1 - 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(30 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-d757b3b2-Label_39") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-d757b3b2-8d51-4b67-b608-a669620245c1 #m-d757b3b2-Label_39": {
                      "attributes": {
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px",
                        "background-color": "#EEEEEE",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#EEEEEE",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#EEEEEE",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#EEEEEE",
                        "border-radius": "3px 3px 3px 3px"
                      },
                      "expressions": {
                        "width": "Math.max(57 - 1 - 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(30 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#m-d757b3b2-8d51-4b67-b608-a669620245c1 #m-d757b3b2-Label_39": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#EEEEEE",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#EEEEEE",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#EEEEEE",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px",
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(57 - 1 - 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(30 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".m-d757b3b2-8d51-4b67-b608-a669620245c1 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#m-d757b3b2-Label_26")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-d757b3b2-Label_37")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-d757b3b2-Label_39")) {
      jEvent.undoCases(jFirer);
    }
  });