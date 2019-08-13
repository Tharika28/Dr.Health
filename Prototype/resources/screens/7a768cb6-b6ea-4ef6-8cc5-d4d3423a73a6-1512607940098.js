jQuery("#simulation")
  .on("click", ".s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/792dd1f8-faa8-4e8d-8468-cafa144ec71f"
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
    } else if(jFirer.is("#s-show_bot")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paris" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-London","#s-NY","#s-Moscow_4" ]
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-show_bot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-NY" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paris","#s-London","#s-Moscow_4" ]
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-show_bot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-London" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paris","#s-NY","#s-Moscow_4" ]
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-show_bot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Moscow_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paris","#s-London","#s-NY" ]
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-show_bot_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paris" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-London","#s-NY","#s-Moscow_4" ]
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-show_bot_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-NY" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paris","#s-London","#s-Moscow_4" ]
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-show_bot_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-London" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paris","#s-NY","#s-Moscow_4" ]
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-show_bot_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Moscow_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paris","#s-London","#s-NY" ]
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-show_bot_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paris" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-London","#s-NY","#s-Moscow_4" ]
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-show_bot_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-NY" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paris","#s-London","#s-Moscow_4" ]
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-show_bot_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-London" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paris","#s-NY","#s-Moscow_4" ]
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-show_bot_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Moscow_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paris","#s-London","#s-NY" ]
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-show_bot_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paris" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-London","#s-NY","#s-Moscow_4" ]
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-show_bot_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-NY" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paris","#s-London","#s-Moscow_4" ]
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-show_bot_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-London" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paris","#s-NY","#s-Moscow_4" ]
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-show_bot_31")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Moscow_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paris","#s-London","#s-NY" ]
                  },
                  "exectype": "parallel",
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
  .on("mouseenter dragenter", ".s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-show_bot") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot": {
                      "attributes": {
                        "background-color": "#5C6DC4",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot": {
                      "attributes-ie": {
                        "-pie-background": "#5C6DC4",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-show_bot_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_1": {
                      "attributes": {
                        "background-color": "#5C6DC4",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_1": {
                      "attributes-ie": {
                        "-pie-background": "#5C6DC4",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-show_bot_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_2": {
                      "attributes": {
                        "background-color": "#5C6DC4",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_2": {
                      "attributes-ie": {
                        "-pie-background": "#5C6DC4",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-show_bot_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_3": {
                      "attributes": {
                        "background-color": "#5C6DC4",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_3": {
                      "attributes-ie": {
                        "-pie-background": "#5C6DC4",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-show_bot_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_4": {
                      "attributes": {
                        "background-color": "#5C6DC4",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_4": {
                      "attributes-ie": {
                        "-pie-background": "#5C6DC4",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-show_bot_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_5": {
                      "attributes": {
                        "background-color": "#5C6DC4",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_5": {
                      "attributes-ie": {
                        "-pie-background": "#5C6DC4",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-show_bot_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_6": {
                      "attributes": {
                        "background-color": "#5C6DC4",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_6": {
                      "attributes-ie": {
                        "-pie-background": "#5C6DC4",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-show_bot_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_7": {
                      "attributes": {
                        "background-color": "#5C6DC4",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_7": {
                      "attributes-ie": {
                        "-pie-background": "#5C6DC4",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-show_bot_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_8": {
                      "attributes": {
                        "background-color": "#5C6DC4",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_8": {
                      "attributes-ie": {
                        "-pie-background": "#5C6DC4",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-show_bot_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_9": {
                      "attributes": {
                        "background-color": "#5C6DC4",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_9": {
                      "attributes-ie": {
                        "-pie-background": "#5C6DC4",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-show_bot_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_10": {
                      "attributes": {
                        "background-color": "#5C6DC4",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_10": {
                      "attributes-ie": {
                        "-pie-background": "#5C6DC4",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-show_bot_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_11": {
                      "attributes": {
                        "background-color": "#5C6DC4",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_11": {
                      "attributes-ie": {
                        "-pie-background": "#5C6DC4",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-show_bot_28") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_28": {
                      "attributes": {
                        "background-color": "#5C6DC4",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_28": {
                      "attributes-ie": {
                        "-pie-background": "#5C6DC4",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-show_bot_29") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_29": {
                      "attributes": {
                        "background-color": "#5C6DC4",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_29": {
                      "attributes-ie": {
                        "-pie-background": "#5C6DC4",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-show_bot_30") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_30": {
                      "attributes": {
                        "background-color": "#5C6DC4",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_30": {
                      "attributes-ie": {
                        "-pie-background": "#5C6DC4",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-show_bot_31") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_31": {
                      "attributes": {
                        "background-color": "#5C6DC4",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 #s-show_bot_31": {
                      "attributes-ie": {
                        "-pie-background": "#5C6DC4",
                        "-pie-poll": "false"
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
  .on("mouseleave dragleave", ".s-7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-show_bot")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-show_bot_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-show_bot_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-show_bot_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-show_bot_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-show_bot_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-show_bot_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-show_bot_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-show_bot_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-show_bot_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-show_bot_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-show_bot_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-show_bot_28")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-show_bot_29")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-show_bot_30")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-show_bot_31")) {
      jEvent.undoCases(jFirer);
    }
  });