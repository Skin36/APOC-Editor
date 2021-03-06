{
        "1":{
                    "name": "save_data",
					"size": 40,
                    "type": "simple",
                    "enum":"False",
					"sign":"string",
					"comment":"No comment"
            },

	    "2":{
                    "name": "save_name",
					"size": 41,
                    "type": "simple",
                    "enum":"False",
					"sign":"string",
					"comment":"Name for save file"
            },
			
		"3":{
                    "name": "x_lim",
					"size": 4,
                    "type": "simple",
                    "enum":"False",
					"sign":"False",
					"comment":"current in game year"
            },

		"4":{
                    "name": "y_lim",
					"size": 4,
                    "type": "simple",
                    "enum":"False",
					"sign":"False",
					"comment":"No Comment"
            },
		"5":{
                    "name": "z_lim",
					"size": 4,
                    "type": "simple",
                    "enum":"False",
					"sign":"False",
					"comment":"No Comment"
            },
		"6":{
                    "name": "map_size",
					"size": 4,
                    "type": "simple",
                    "enum":"False",
					"sign":"False",
					"comment":"No Comment"
            },
        "7":{
                    "name": "building_dat",
					"enum":"False",
					"enum_type":"False",
                    "struc_count": 1,
                    "type": "struc",
					"sign":"False",
					"comment":"No Comment",
					"struc_member":"13",
					"struc":{
                             "0":
                                 {"name":"base_map_size_x",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "1":
                                 {"name":"base_map_size_y",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "2":
                                 {"name":"base_map_size_z",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "3":
                                 {"name":"sizes_map_block_x",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "4":
                                 {"name":"sizes_map_block_y",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "5":
                                 {"name":"sizes_map_block_z",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "6":
                                 {"name":"entrance_NESW",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "7":
                                 {"name":"exit_NESW",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "8":
                                 {"name":"min_entrance_levels",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "9":
                                 {"name":"max_entrance_levels",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "10":
                                 {"name":"min_exit_levels",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "11":
                                 {"name":"max_entrance_levels_",
                                  "enum":"False",
                                  "size":1919,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "12":
                                 {"name":"ind_destroyed_ground",
                                  "enum":"False",
                                  "size":9,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  }
                            }
            },
		
        "8":{
                    "name": "SCENARIO_dat",
					"enum":"False",
					"enum_type":"False",
                    "struc_count": 1,
                    "type": "struc",
					"sign":"False",
					"comment":"No Comment",
					"struc_member":"52",
					"struc":{
                             "0":
                                 {"name":"map_name",
                                  "enum":"False",
                                  "size":40,
                                  "elements":0,
                                  "type":"False",
                                  "sign":"string",
                                  "comment":"none"
                                  },
                             "1":
                                 {"name":"map_x_size",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "2":
                                 {"name":"map_y_size",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "3":
                                 {"name":"map_z_size",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "4":
                                 {"name":"dword_244020",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "5":
                                 {"name":"mission_type",
                                  "enum":"xcom_mission_type",
                                  "enum_num":4,
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "6":
                                 {"name":"year_temp",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "7":
                                 {"name":"month_temp",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "8":
                                 {"name":"week_temp",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "9":
                                 {"name":"day_temp",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "10":
                                 {"name":"hour_temp",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "11":
                                 {"name":"minute_temp",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "11":
                                 {"name":"second_temp",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "12":
                                 {"name":"bldn_num",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "13":
                                 {"name":"bld_function",
                                  "enum":"building_function",
                                  "enum_num":38,
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "14":
                                 {"name":"bld_owner",
                                  "enum":"Organizations",
                                  "enum_num":29,
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "15":
                                 {"name":"bld_relation",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "16":
                                 {"name":"dword_244054",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "17":
                                 {"name":"dword_244058",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "18":
                                 {"name":"dword_24405C",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "19":
                                 {"name":"dword_244060",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "20":
                                 {"name":"bld_ship_type_mission",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "21":
                                 {"name":"rank_0",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "22":
                                 {"name":"rank_1",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "23":
                                 {"name":"rank_1",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "24":
                                 {"name":"rank_2",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "25":
                                 {"name":"rank_3",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "26":
                                 {"name":"rank_4",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "27":
                                 {"name":"rank_5",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "28":
                                 {"name":"rank_6",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "29":
                                 {"name":"field_83",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "30":
                                 {"name":"field_84",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "31":
                                 {"name":"field_88",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "32":
                                 {"name":"field_8C",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "33":
                                 {"name":"field_90",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "34":
                                 {"name":"field_94",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "35":
                                 {"name":"field_98",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "35":
                                 {"name":"field_9C",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "36":
                                 {"name":"field_A0",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "37":
                                 {"name":"field_A4",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "38":
                                 {"name":"field_A8",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "39":
                                 {"name":"diff_enum",
                                  "enum":"difficulty_level",
                                  "enum_num":5,
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "40":
                                 {"name":"field_B0",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "41":
                                 {"name":"field_B4",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "42":
                                 {"name":"tac_score",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "43":
                                 {"name":"field_BC",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "44":
                                 {"name":"field_C0",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "45":
                                 {"name":"field_C1",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "46":
                                 {"name":"field_C2",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "47":
                                 {"name":"field_C3",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "48":
                                 {"name":"field_C4",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "49":
                                 {"name":"field_C8",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "50":
                                 {"name":"field_CC",
                                  "enum":"False",
                                  "size":6,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "51":
                                 {"name":"field_D0",
                                  "enum":"False",
                                  "size":6,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  }
                             }
            },
 
		"9":{
                    "name": "dword_E4D28",
					"size": 4,
                    "type": "simple",
                    "enum":"False",
					"sign":"False",
					"comment":"No Comment"
            },

		"10":{
                    "name": "dword_E4D2C",
					"size": 4,
                    "type": "simple",
                    "enum":"False",
					"sign":"False",
					"comment":"No Comment"
            },

		"11":{
                    "name": "game_speed",
					"size": 4,
                    "enum":"game_speed",
                    "enum_num":5,
                    "type": "simple",
					"sign":"False",
					"comment":"No Comment"
            },

		"12":{
                    "name": "year",
					"size": 2,
                    "type": "simple",
                    "enum":"False",
					"sign":"False",
					"comment":"No Comment"
            },
        "13":{
                    "name": "mounth",
					"size": 2,
                    "type": "simple",
                    "enum":"False",
					"sign":"False",
					"comment":"No Comment"
            },
        "14":{
                    "name": "week",
					"size": 2,
                    "type": "simple",
                    "enum":"False",
                    "sign":"False",
					"comment":"No Comment"
            },
        "15":{
                    "name": "day",
					"size": 2,
                    "type": "simple",
                    "enum":"False",
					"sign":"False",
					"comment":"No Comment"
            },
        "16":{
                    "name": "hours",
					"size": 2,
                    "type": "simple",
                    "enum":"False",
					"sign":"False",
					"comment":"No Comment"
            },
        "17":{
                    "name": "minute",
					"size": 2,
                    "type": "simple",
                    "enum":"False",
					"sign":"False",
					"comment":"No Comment"
            },
        "18":{
                    "name": "second",
					"size": 2,
                    "type": "simple",
                    "enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "19":{
                    "name": "tick",
					"size": 2,
                    "type": "simple",
                    "enum":"False",
					"sign":"False",
					"comment":"Current map-City or Alien Demension"
            },
        "20":{
                    "name": "word_E6C38",
					"size": 2,
                    "type": "simple",
                    "enum":"False",
                    "sign":"False",
                    "comment":"No Comment"
             },
        "21":{
                    "name": "word_E6D40",
					"size": 2,
                    "type": "simple",
                    "enum":"False",
                    "sign":"True",
                    "comment":"No Comment"
             },
        "22":{
                    "name": "word_E6D42",
					"size": 2,
                    "type": "simple",
                    "enum":"False",
                    "sign":"True",
                    "comment":"No Comment"
             },
        "23":{
                    "name": "word_E6D44",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "24":{
                    "name": "temp_squad",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "25":{
                    "name": "word_E6D48",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
            },
        "26":{
                    "name": "word_E6D4A",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "27":{
                    "name": "word_E6D4E",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
            },
        "28":{
                    "name": "player_side",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
		     },
        "29":{
                    "name": "AI_control_NONE",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
           },
        "30":{
                    "name": "AI_control_FULL",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"0-off,1-follow"
             },
        "31":{
                    "name": "byte_27A804",
					"size": 1,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "32":{
                    "name": "dword_E9E3E",
					"size": 1,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "33":{
                    "name": "dword_1EBDD8",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
           },
        "34":{
                    "name": "unit_1",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
					
             },
        "35":{
                    "name": "unit_2",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"

             },
        "36":{
                    "name": "unit_3",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"

             },
        "37":{
                    "name": "unit_4",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"

             },
        "38":{
                    "name": "unit_5",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"

             },
        "39":{
                    "name": "unit_6",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"

             },
        "40":{
                    "name": "dword_1B25F4",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "41":{
                    "name": "word_1B7BAA",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "42":{
                    "name": "WEAPEXP_write_flag",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "43":{
                    "name": "dword_1B8E40",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "44":{
                    "name": "dword_1B8E44",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
           },
        "45":{
                    "name": "dword_1B8E48",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
           },
        "46":{
                    "name": "side_array_1",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"org for hot seat game"
             },
        "47":{
                    "name": "side_array_2",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"org for hot seat game"
             },
        "48":{
                    "name": "side_array_3",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"org for hot seat game"
             },
        "49":{
                    "name": "side_array_4",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"org for hot seat game"
           },
        "50":{
                    "name": "side_array_5",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"org for hot seat game"
             },
        "51":{
                    "name": "side_array_6",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"org for hot seat game"
           },
        "52":{
                    "name": "side_array_7",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"org for hot seat game"
             },
        "53":{
                    "name": "side_array_8",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"org for hot seat game"
             },
        "54":{
                    "name": "dword_1EBDDC",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
           },
        "55":{
                    "name": "dword_1ED368",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "56":{
                    "name": "dword_E60DC",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },

        "57":{
                    "name": "dword_E60E0",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
                    "comment":"No Comment"
             },
        "58":{
                    "name": "dword_E6BC4",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "59":{
                    "name": "dword_E60EC",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "60":{
                    "name": "dword_E60F0",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "61":{
                    "name": "dword_E6BC8",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },

        "62":{
                    "name": "dword_E60FC",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "63":{
                    "name": "dword_E6100",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "64":{
                    "name": "dword_E6BCC",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "65":{
                    "name": "dword_E610C",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "66":{
                    "name": "dword_E6110",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "67":{
                    "name": "dword_E6BD0",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "68":{
                    "name": "dword_E6C64",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "69":{
                    "name": "word_E6BD8",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "70":{
                    "name": "dword_E6C70",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "71":{
                    "name": "word_E6BDA",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "72":{
                    "name": "dword_E6C7C",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "73":{
                    "name": "word_E6BDC",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "74":{
                    "name": "dword_E6C88",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "75":{
                    "name": "word_E6BDE",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "76":{
                    "name": "word_E6BDE",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "77":{
                    "name": "tactical_pal",
					"size": 768,
                    "type": "simple",
					"enum":"False",
					"sign":"seek",
					"comment":"pallette"
             },
        "78":{
                    "name": "pal_01",
					"size": 768,
                    "type": "simple",
					"enum":"False",
					"sign":"seek",
					"comment":"pallette"
             },
        "79":{
                    "name": "pal_02",
					"size": 768,
                    "type": "simple",
					"enum":"False",
					"sign":"seek",
					"comment":"pallette"
             },
        "80":{
                    "name": "pal_03",
					"size": 768,
                    "type": "simple",
					"enum":"False",
					"sign":"seek",
					"comment":"pallette"
             },
        "81":{
                    "name": "pallette",
					"size": 768,
                    "type": "simple",
					"enum":"False",
					"sign":"seek",
					"comment":"pallette"
             },
        "82":{
                    "name": "equip_pal",
					"size": 768,
                    "type": "simple",
					"enum":"False",
					"sign":"seek",
					"comment":"pallette"
             },
        "83":{
                    "name": "PCK_index",
					"size": 256,
                    "type": "simple",
					"enum":"False",
					"sign":"seek",
					"comment":"No Comment"
             },
        "84":{
                    "name": "dword_27A870",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
        "85":{
                    "name": "byte_27A0EA",
					"size": 1,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
       "86":{
                    "name": "byte_27A0EB",
					"size": 1,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },

       "87":{
                    "name": "unc",
					"size": 1,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
             },
       "88":{
                    "name": "empty",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"seek",
					"comment":"No Comment"
             },

       "89":{
                    "name": "object_dat",
                    "struc_count": 750,
                    "type": "struc",
					"sign":"False",
					"enum":"agent_equipment",
					"enum_type":"2",
					"comment":"No Comment",
					"struc_member":"46",
					"struc":{
					         "0":
                                 {"name":"owned_org",
                                  "enum":"Organizations",
                                  "enum_num":29,
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"1":
                                 {"name":"score",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"2":
                                 {"name":"equipment",
                                  "enum":"agent_equipment",
                                  "enum_num":89,
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"3":
                                 {"name":"unit_num",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"4":
                                 {"name":"x_pos",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                            "5":
                                 {"name":"y_pos",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                            "6":
                                 {"name":"z_pos",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"7":
                                 {"name":"brainsucker_status",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"8":
                                 {"name":"lof",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"9":
                                 {"name":"power",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"10":
                                 {"name":"max_primary_rounds",
                                  "enum":"False",
                                  "size":2,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"11":
                                 {"name":"primary_ammo_effect",
                                  "enum":"agent_equipment_type",
                                  "enum_num":46,
                                  "size":2,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"12":
                                 {"name":"armor_rating",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"13":
                                 {"name":"under_fire_flag",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "14":
                                 {"name":"field_10",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						   "15":
                                 {"name":"field_11",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "16":
                                 {"name":"org_1",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "17":
                                 {"name":"org_2",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "18":
                                 {"name":"org_3",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "19":
                                 {"name":"org_4",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "20":
                                 {"name":"org_5",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "21":
                                 {"name":"org_6",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "22":
                                 {"name":"org_7",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "23":
                                 {"name":"org_8",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "24":
                                 {"name":"org_9",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "25":
                                 {"name":"org_10",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "26":
                                 {"name":"org_11",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "27":
                                 {"name":"org_12",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "28":
                                 {"name":"org_13",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "29":
                                 {"name":"org_14",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "30":
                                 {"name":"org_15",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "31":
                                 {"name":"org_16",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "32":
                                 {"name":"org_17",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "33":
                                 {"name":"org_18",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "34":
                                 {"name":"org_19",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "35":
                                 {"name":"org_20",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "36":
                                 {"name":"org_21",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "37":
                                 {"name":"org_22",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "38":
                                 {"name":"org_23",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "39":
                                 {"name":"org_24",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "40":
                                 {"name":"org_25",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "41":
                                 {"name":"org_26",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "42":
                                 {"name":"org_27",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "43":
                                 {"name":"org_28",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "44":
                                 {"name":"owned_org_",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "45":
                                 {"name":"field_2F",
                                  "enum":"False",
                                  "size":1,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  }
								  
							}
           },
       "90":{
                    "name": "sqreen_struct",
                    "struc_count": 250,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"No Comment",
					"struc_member":"4",
					"struc":{
							"0":
                                 {"name":"x1",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"True",
                                  "comment":"No Comment"
                                  },
							"1":
                                 {"name":"x2",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"True",
                                  "comment":"No Comment"
                                  },
							"2":
                                 {"name":"y1",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"True",
                                  "comment":"No Comment"
                                  },
							"3":
                                 {"name":"y2",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"True",
                                  "comment":"No Comment"
                                  }
							}  
           },

       "91":{
                                  "name": "grounmap_dat",
					              "size": 22016,
                                  "type": "simple",
					              "enum":"False",
					              "sign":"seek",
					              "comment":"map"
           },
       "92":{
                                  "name": "leftmap_dat",
					              "size": 22016,
                                  "type": "simple",
					              "enum":"False",
					              "sign":"seek",
					              "comment":"map"
           },
       "93":{
                                  "name": "rightmap_dat",
					              "size": 22016,
                                  "type": "simple",
					              "enum":"False",
					              "sign":"seek",
					              "comment":"map"
           },
       "94":{
                                  "name": "featmap_dat",
					              "size": 22016,
                                  "type": "simple",
					              "enum":"False",
					              "sign":"seek",
					              "comment":"map"
           },

       "95":{
                    "name": "struc_agent",
                    "struc_count": 60,
                    "type": "struc",
					"sign":"False",
					"enum":"True",
					"enum_type":"3",
					"comment":"No Comment",
					"struc_member":"345",
					"struc":{
                             "0":
                                 {"name":"image",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"1":
                                 {"name":"image_2",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"2":
                                 {"name":"ID",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"3":
                                 {"name":"name",
                                  "enum":"False",
                                  "size":26,
                                  "elements":0,
                                  "type":"False",
                                  "sign":"string",
                                  "comment":"none"
                                  },
							"4":
                                 {"name":"side",
                                  "enum":"Organizations",
								  "enum_num":29,
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"5":
                                 {"name":"unit_type",
                                  "enum":"unit_image",
								  "enum_num":15,
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"6":
                                 {"name":"AI_control",
                                  "enum":"AI_control",
								  "enum_num":3,
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"7":
                                 {"name":"squad",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"8":
                                 {"name":"anim_offset",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"9":
                                 {"name":"field_2A",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"10":
                                 {"name":"field_2B",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"11":
                                 {"name":"field_2C",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"12":
                                 {"name":"field_2D",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"13":
                                 {"name":"field_2E",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"14":
                                 {"name":"rank",
                                  "enum":"rank",
								  "enum_num":7,
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"15":
                                 {"name":"field_30",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"16":
                                 {"name":"r_hend_weapon",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"weapon in object_dat"
                                  },
							"17":
                                 {"name":"l_hand_weapon",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"weapon in object_dat"
                                  },
						    "18":
                                 {"name":"total_encumberance",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"19":
                                 {"name":"weapon_weight",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"20":
                                 {"name":"days_service",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"21":
                                 {"name":"kills",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "22":
                                 {"name":"missions",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"23":
                                 {"name":"score",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"24":
                                 {"name":"field_42",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"25":
                                 {"name":"field_43",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"26":
                                 {"name":"score_for_kill",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"27":
                                 {"name":"leg_type",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"28":
                                 {"name":"head_armor",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "29":
                                 {"name":"body_armor",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"30":
                                 {"name":"r_arm_armor",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"31":
                                 {"name":"l_arm_armor",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"32":
                                 {"name":"leg_armor",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"33":
                                 {"name":"uncnown_armor",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"34":
                                 {"name":"leg_wound",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"35":
                                 {"name":"tors_wound",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "36":
                                 {"name":"l_hend_wound",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"37":
                                 {"name":"r_hend_wound",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"38":
                                 {"name":"head_wound",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "39":
                                 {"name":"rear_wound",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"40":
                                 {"name":"max_speed",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "41":
                                 {"name":"max_TU",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "42":
                                 {"name":"curr_remain_TUs",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"43":
                                 {"name":"Reserve_TU_shot",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "44":
                                 {"name":"Reserve_TU_kneel",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"45":
                                 {"name":"cloak_dist",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"46":
                                 {"name":"max_health",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"47":
                                 {"name":"current_health",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "48":
                                 {"name":"morale_1",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"49":
                                 {"name":"morale_2",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"50":
                                 {"name":"stamina_1",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  }, 
							"51":
                                 {"name":"stamina_2",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "52":
                                 {"name":"field_6A",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"53":
                                 {"name":"field_6B",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"54":
                                 {"name":"field_6C",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"55":
                                 {"name":"field_6D",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "56":
                                 {"name":"field_6E",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"57":
                                 {"name":"field_6F",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"58":
                                 {"name":"strenght_max",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"59":
                                 {"name":"strenght_curr",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "60":
                                 {"name":"curr_morale",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"61":
                                 {"name":"braverly",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"62":
                                 {"name":"psi_energy_max",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"63":
                                 {"name":"psi_energy_curr",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "64":
                                 {"name":"field_76",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"65":
                                 {"name":"field_77",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"66":
                                 {"name":"field_78",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"67":
                                 {"name":"field_79",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "68":
                                 {"name":"field_7A",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"69":
                                 {"name":"field_7B",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"70":
                                 {"name":"unit_status",
                                  "enum":"status_unit",
								  "enum_num":5,
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"71":
                                 {"name":"agressive_mode_2",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "72":
                                 {"name":"fire_mode_2",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"73":
                                 {"name":"field_7F",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"74":
                                 {"name":"stun_level",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"75":
                                 {"name":"fire_damage",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"76":
                                 {"name":"field_83",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"77":
                                 {"name":"under_fire_flag",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"78":
                                 {"name":"field_86",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"79":
                                 {"name":"psi_attack_curr",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"80":
                                 {"name":"psi_defese_curr",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"81":
                                 {"name":"psi_defese_max",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"82":
                                 {"name":"field_8B",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"83":
                                 {"name":"accuracy",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"84":
                                 {"name":"current_accuracy",
                                  "enum":"veh_target_type",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"85":
                                 {"name":"field_90",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"86":
                                 {"name":"field_91",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"87":
                                 {"name":"field_92",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"88":
                                 {"name":"field_93",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"89":
                                 {"name":"field_94",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"90":
                                 {"name":"field_95",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"91":
                                 {"name":"gender",
                                  "enum":"gender",
								  "enum_num":3,
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"92":
                                 {"name":"face_image",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"93":
                                 {"name":"field_98",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"94":
                                 {"name":"field_99",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"95":
                                 {"name":"photo_image",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"96":
                                 {"name":"field_9B",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"97":
                                 {"name":"field_9C",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"98":
                                 {"name":"field_9D",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"99":
                                 {"name":"ufield_9E",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"100":
                                 {"name":"field_9F",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"101":
                                 {"name":"field_A0",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"102":
                                 {"name":"field_A1",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"103":
                                 {"name":"equip_set_1",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "104":
                                 {"name":"equip_set_2",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"105":
                                 {"name":"equip_set_3",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "106":
                                 {"name":"equip_set_4",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"107":
                                 {"name":"equip_set_5",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"108":
                                 {"name":"field_A7",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"109":
                                 {"name":"tracker_state",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"110":
                                 {"name":"x_pos",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "111":
                                 {"name":"y_pos",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"112":
                                 {"name":"z_pos",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "113":
                                 {"name":"field_B0",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"114":
                                 {"name":"field_B1",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"115":
                                 {"name":"field_B2",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"116":
                                 {"name":"field_B3",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"117":
                                 {"name":"field_B4",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"118":
                                 {"name":"field_B5",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"119":
                                 {"name":"field_B6",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"120":
                                 {"name":"field_B7",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"121":
                                 {"name":"field_B8",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"122":
                                 {"name":"field_B9",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"123":
                                 {"name":"x_pos_3D",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"124":
                                 {"name":"y_pos_3D",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"125":
                                 {"name":"z_pos_3D",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"126":
                                 {"name":"x_size",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"127":
                                 {"name":"y_size",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"128":
                                 {"name":"z_size",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"129":
                                 {"name":"field_C6",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"130":
                                 {"name":"field_C7",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"131":
                                 {"name":"field_C8",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"132":
                                 {"name":"field_C9",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"133":
                                 {"name":"field_CA",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"134":
                                 {"name":"field_CB",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						   "135":
                                 {"name":"field_CC",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
					        "136":
                                 {"name":"field_CD",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						   "137":
                                 {"name":"lof_height",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						   "138":
                                 {"name":"size_x_1",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						   "139":
                                 {"name":"x_pos_move_target",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						   "140":
                                 {"name":"y_pos_move_target",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						   "141":
                                 {"name":"z_pos_move_target",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						   "142":
                                 {"name":"x_pos_1",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						   "143":
                                 {"name":"y_pos_1",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						   "144":
                                 {"name":"z_pos_1",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						   "145":
                                 {"name":"field_DE",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						   "146":
                                 {"name":"field_DF",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						   "147":
                                 {"name":"x_pos_2",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						   "148":
                                 {"name":"y_pos_2",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						   "149":
                                 {"name":"z_pos_2",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						   "150":
                                 {"name":"field_E3",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						   "151":
                                 {"name":"field_E4",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						   "152":
                                 {"name":"field_E5",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						   "153":
                                 {"name":"field_E6",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						   "154":
                                 {"name":"field_E7",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
                                  },
						   "155":
                                 {"name":"field_E8",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "156":
                                 {"name":"field_E9",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "157":
                                 {"name":"field_EA",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "158":
                                 {"name":"field_EB",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "159":
                                 {"name":"field_EC",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "160":
                                 {"name":"field_ED",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "161":
                                 {"name":"item_size_x",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "162":
                                 {"name":"item_size_y",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "163":
                                 {"name":"item_size_z",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "164":
                                 {"name":"field_F1",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "165":
                                 {"name":"matrix_action_9_mode",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "166":
                                 {"name":"field_F4",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "167":
                                 {"name":"field_F6",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "168":
                                 {"name":"move_mode",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "169":
                                 {"name":"field_FA",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "170":
                                 {"name":"field_FC",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "171":
                                 {"name":"max_speed_2_mod",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "172":
                                 {"name":"field_FF",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "173":
                                 {"name":"curr_max_TU",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "174":
                                 {"name":"current_frame_speed_by_moving_mode",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "175":
                                 {"name":"field_104",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "176":
                                 {"name":"field_105",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "177":
                                 {"name":"field_106",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "178":
                                 {"name":"field_107",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
					        "179":
                                 {"name":"lof_offset",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "180":
                                 {"name":"x_pos_3",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "181":
                                 {"name":"y_pos_3",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "182":
                                 {"name":"z_pos_3",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "183":
                                 {"name":"field_10D",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "184":
                                 {"name":"field_10E",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "185":
                                 {"name":"field_10F",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "186":
                                 {"name":"field_110",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "187":
                                 {"name":"field_111",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "188":
                                 {"name":"field_112",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"189":
                                 {"name":"field_113",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"190":
                                 {"name":"field_114",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"191":
                                 {"name":"field_115",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"192":
                                 {"name":"field_116",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"193":
                                 {"name":"field_117",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"194":
                                 {"name":"field_118",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						    "195":
                                 {"name":"field_119",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"196":
                                 {"name":"field_11A",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"197":
                                 {"name":"field_11B",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"198":
                                 {"name":"field_11C",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"199":
                                 {"name":"field_11D",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"200":
                                 {"name":"field_11E",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "201":
                                 {"name":"end",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"202":
                                 {"name":"equipment_layuot",
                                  "enum":"craft_equipment_layout",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"203":
                                 {"name":"equipment slot 1",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"204":
                                 {"name":"equipment slot 2",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"205":
                                 {"name":"equipment slot 3",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"206":
                                 {"name":"equipment slot 4",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"207":
                                 {"name":"equipment slot 5",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"208":
                                 {"name":"equipment slot 6",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "209":
                                 {"name":"equipment slot 7",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"210":
                                 {"name":"equipment slot 8",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"211":
                                 {"name":"equipment slot 9",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"212":
                                 {"name":"equipment slot 10",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"213":
                                 {"name":"equipment slot 11",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"214":
                                 {"name":"equipment slot 12",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"215":
                                 {"name":"equipment slot 13",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"216":
                                 {"name":"equipment slot 14",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"217":
                                 {"name":"equipment slot 15",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"218":
                                 {"name":"equipment slot 16",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "219":
                                 {"name":"equipment slot 17",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"220":
                                 {"name":"equipment slot 18",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"221":
                                 {"name":"equipment slot 19",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"222":
                                 {"name":"equipment slot 20",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						    "223":
                                 {"name":"equipment slot 21",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"224":
                                 {"name":"equipment slot 22",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"225":
                                 {"name":"equipment slot 23",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"226":
                                 {"name":"equipment slot 24",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"227":
                                 {"name":"equipment slot 25",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"228":
                                 {"name":"equipment slot 26",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"229":
                                 {"name":"equipment slot 27",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "230":
                                 {"name":"equipment slot 28",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"231":
                                 {"name":"equipment slot 29",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"232":
                                 {"name":"equipment slot 30",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"233":
                                 {"name":"equipment slot 31",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"234":
                                 {"name":"equipment slot 32",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						    "235":
                                 {"name":"equipment slot 33",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"236":
                                 {"name":"equipment slot 34",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"237":
                                 {"name":"equipment slot 35",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"238":
                                 {"name":"equipment slot 36",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"239":
                                 {"name":"equipment slot 37",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"240":
                                 {"name":"equipment slot 38",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"241":
                                 {"name":"equipment slot 39",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "242":
                                 {"name":"equipment slot 40",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"243":
                                 {"name":"equipment slot 41",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"244":
                                 {"name":"equipment slot 42",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"245":
                                 {"name":"equipment slot 43",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "246":
                                 {"name":"equipment slot 44",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "247":
                                 {"name":"equipment slot 45",
                                  "enum":"craft_equip",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"248":
                                 {"name":"ammo/fuel 1",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"249":
                                 {"name":"ammo/fuel 2",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"250":
                                 {"name":"ammo/fuel 3",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"251":
                                 {"name":"ammo/fuel 4",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"252":
                                 {"name":"other slot 5",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"253":
                                 {"name":"other slot 6",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"254":
                                 {"name":"other slot 7",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"255":
                                 {"name":"other slot 8",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"256":
                                 {"name":"other slot 9",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"257":
                                 {"name":"other slot 10",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"258":
                                 {"name":"other slot 11",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"259":
                                 {"name":"other slot 12",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"260":
                                 {"name":"other slot 13",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"261":
                                 {"name":"other slot 14",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"262":
                                 {"name":"other slot 15",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"263":
                                 {"name":"other slot 16",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"264":
                                 {"name":"other slot 17",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"265":
                                 {"name":"other slot 18",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"266":
                                 {"name":"other slot 19",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"267":
                                 {"name":"other slot 20",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"268":
                                 {"name":"other slot 21",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"269":
                                 {"name":"other slot 22",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"270":
                                 {"name":"other slot 23",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"271":
                                 {"name":"other slot 24",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"272":
                                 {"name":"other slot 25",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"273":
                                 {"name":"other slot 26",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"274":
                                 {"name":"other slot 27",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"275":
                                 {"name":"other slot 28",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"276":
                                 {"name":"other slot 29",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"277":
                                 {"name":"other slot 30",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"278":
                                 {"name":"other slot 31",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"279":
                                 {"name":"other slot 32",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"280":
                                 {"name":"other slot 33",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"281":
                                 {"name":"other slot 34",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"282":
                                 {"name":"other slot 35",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"283":
                                 {"name":"other slot 36",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"284":
                                 {"name":"other slot 37",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"285":
                                 {"name":"other slot 38",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"286":
                                 {"name":"other slot 39",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"287":
                                 {"name":"other slot 40",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"288":
                                 {"name":"other slot 41",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"289":
                                 {"name":"other slot 42",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"290":
                                 {"name":"other slot 43",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"291":
                                 {"name":"other slot 44",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"292":
                                 {"name":"other slot 45",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"293":
                                 {"name":"unk slot 1",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"294":
                                 {"name":"unk slot 2",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"295":
                                 {"name":"unk slot 3",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"296":
                                 {"name":"unk slot 4",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"297":
                                 {"name":"unk slot 5",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"298":
                                 {"name":"unk slot 6",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"299":
                                 {"name":"unk slot 7",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"300":
                                 {"name":"unk slot 8",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						    "301":
                                 {"name":"unk slot 9",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"302":
                                 {"name":"unk slot 10",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"303":
                                 {"name":"unk slot 11",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"304":
                                 {"name":"unk slot 12",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"305":
                                 {"name":"unk slot 13",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"306":
                                 {"name":"unk slot 14",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"307":
                                 {"name":"unk slot 15",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"308":
                                 {"name":"unk slot 16",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"309":
                                 {"name":"unk slot 17",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"310":
                                 {"name":"unk slot 18",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						    "311":
                                 {"name":"unk slot 19",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"312":
                                 {"name":"unk slot 20",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"313":
                                 {"name":"unk slot 21",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"314":
                                 {"name":"unk slot 22",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"315":
                                 {"name":"unk slot 23",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"316":
                                 {"name":"unk slot 24",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"317":
                                 {"name":"unk slot 25",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"318":
                                 {"name":"unk slot 26",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"319":
                                 {"name":"unk slot 27",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"320":
                                 {"name":"unk slot 28",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"321":
                                 {"name":"unk slot 29",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"322":
                                 {"name":"unk slot 30",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						    "323":
                                 {"name":"unk slot 31",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"324":
                                 {"name":"unk slot 32",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"325":
                                 {"name":"unk slot 33",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"326":
                                 {"name":"unk slot 34",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						    "327":
                                 {"name":"unk slot 35",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"328":
                                 {"name":"unk slot 36",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"329":
                                 {"name":"unk slot 37",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"330":
                                 {"name":"unk slot 38",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"331":
                                 {"name":"unk slot 39",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"332":
                                 {"name":"unk slot 40",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						    "333":
                                 {"name":"unk slot 41",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"334":
                                 {"name":"unk slot 42",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"335":
                                 {"name":"unk slot 43",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"336":
                                 {"name":"unk slot 44",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"337":
                                 {"name":"unk slot 45",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"338":
                                 {"name":"cloaking",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"True",
                                  "comment":"none"
								  },
							"339":
                                 {"name":"frozen",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"statis bomb launcher froze on 36 ticks"
								  },
							"340":
                                 {"name":"field_270",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"341":
                                 {"name":"field_271",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
							"342":
                                 {"name":"field_272",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "343":
                                 {"name":"field_273",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none"
								  },
						   "344":
                                 {"name":"unknown_292",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"none1"
								  }
						    }
           },
       "96":{
                    "name": "road_junction",
                    "struc_count": 512,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"No Comment",
					"struc_member":"16",
					"struc":{
							"0":
                                 {"name":"x_pos",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
							"1":
                                 {"name":"y_pos",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
							"2":
                                 {"name":"z_pos",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
							"3":
                                 {"name":"connection_N",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
							"4":
                                 {"name":"connection_E",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
							"5":
                                 {"name":"connection_S",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
							"6":
                                 {"name":"connection_W",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
							"7":
                                 {"name":"neig_hill_N",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
							"8":
                                 {"name":"neig_hill_E",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
							"9":
                                 {"name":"neig_hill_S",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
							"10":
                                 {"name":"neig_hill_W",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
							"11":
                                 {"name":"field_16",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
							"12":
                                 {"name":"field_16",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
							"13":
                                 {"name":"field_18",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
							"14":
                                 {"name":"field_18",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
							"15":
                                 {"name":"road_end",
                                  "enum":"road_end",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  }
                            }
              },
       "97":{
                    "name": "blding_struc",
                    "struc_count": 110,
                    "type": "struc",
					"sign":"False",
					"enum":"building",
					"enum_type":"0",
					"comment":"No Comment",
					"struc_member":"125",
					"struc":{
						"0":
                                 {"name":"building_name",
                                  "enum":"building",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                        "1":
                                 {"name":"x1position",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                        "2":
                                 {"name":"x2position",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "3":
                                 {"name":"y1position",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "4":
                                 {"name":"y2position",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "5":
                                 {"name":"field_A",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "6":
                                 {"name":"count_value_zero_tile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "7":
                                 {"name":"x_terminal",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "8":
                                 {"name":"y_terminal",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "9":
                                 {"name":"z_terminal",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "10":
                                 {"name":"ppl_tube_junc_num",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "11":
                                 {"name":"ptj_x1",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "12":
                                 {"name":"ptj_x2",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "13":
                                 {"name":"ptj_x3",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "14":
                                 {"name":"ptj_x4",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "15":
                                 {"name":"ptj_x5",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "16":
                                 {"name":"ptj_x6",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },

                          "17":
                                 {"name":"ptj_y1",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "18":
                                 {"name":"ptj_y2",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "19":
                                 {"name":"ptj_y3",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "20":
                                 {"name":"ptj_y4",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "21":
                                 {"name":"ptj_y5",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "22":
                                 {"name":"ptj_y6",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "23":
                                 {"name":"ptj_z1",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "24":
                                 {"name":"ptj_z2",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "25":
                                 {"name":"ptj_z3",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "26":
                                 {"name":"ptj_z4",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "27":
                                 {"name":"ptj_z5",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "28":
                                 {"name":"ptj_z6",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "29":
                                 {"name":"linked_bld_count",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "30":
                                 {"name":"linked_bld_num1",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "31":
                                 {"name":"linked_bld_num2",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "32":
                                 {"name":"linked_bld_num3",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "33":
                                 {"name":"linked_bld_num4",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "34":
                                 {"name":"linked_bld_num5",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "35":
                                 {"name":"linked_bld_num6",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "36":
                                 {"name":"linked_bld_num7",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "37":
                                 {"name":"linked_bld_num8",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "38":
                                 {"name":"linked_bld_num9",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "39":
                                 {"name":"linked_bld_num10",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "40":
                                 {"name":"linked_bld_num11",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "41":
                                 {"name":"linked_bld_num12",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "42":
                                 {"name":"ppl_t_length_bld_1",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "43":
                                 {"name":"ppl_t_length_bld_2",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "44":
                                 {"name":"ppl_t_length_bld_3",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "45":
                                 {"name":"ppl_t_length_bld_4",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "46":
                                 {"name":"ppl_t_length_bld_5",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "47":
                                 {"name":"ppl_t_length_bld_6",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "48":
                                 {"name":"ppl_t_length_bld_7",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "49":
                                 {"name":"ppl_t_length_bld_8",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "50":
                                 {"name":"ppl_t_length_bld_9",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "51":
                                 {"name":"ppl_t_length_bld_10",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "52":
                                 {"name":"ppl_t_length_bld_11",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "53":
                                 {"name":"ppl_t_length_bld_12",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "54":
                                 {"name":"tube_junc_con_bld_1",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "55":
                                 {"name":"tube_junc_con_bld_2",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "56":
                                 {"name":"tube_junc_con_bld_3",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "57":
                                 {"name":"tube_junc_con_bld_4",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "58":
                                 {"name":"tube_junc_con_bld_5",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "59":
                                 {"name":"tube_junc_con_bld_6",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "60":
                                 {"name":"tube_junc_con_bld_7",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "61":
                                 {"name":"tube_junc_con_bld_8",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "62":
                                 {"name":"tube_junc_con_bld_9",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "63":
                                 {"name":"tube_junc_con_bld_10",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "64":
                                 {"name":"tube_junc_con_bld_11",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "65":
                                 {"name":"tube_junc_con_bld_12",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "66":
                                 {"name":"tube_con_dir_out_bld_1",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "67":
                                 {"name":"tube_con_dir_out_bld_2",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "68":
                                 {"name":"tube_con_dir_out_bld_3",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "69":
                                 {"name":"tube_dir_out_bld_4",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "70":
                                 {"name":"tube_dir_out_bld_5",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "71":
                                 {"name":"tube_dir_out_bld_6",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "72":
                                 {"name":"tube_dir_out_bld_7",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "73":
                                 {"name":"tube_dir_out_bld_8",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "74":
                                 {"name":"tube_junc_dir_out_bld_9",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "75":
                                 {"name":"tube_dir_out_bld_10",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "76":
                                 {"name":"tube__dir_out_bld_11",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "77":
                                 {"name":"tube_dir_out_bld_12",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "78":
                                 {"name":"tube_conn_to_neig_bld1",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "79":
                                 {"name":"tube_conn_to_neig_bld2",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "80":
                                 {"name":"tube_conn_to_neig_bld3",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "81":
                                 {"name":"tube_conn_to_neig_bld4",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "82":
                                 {"name":"tube_conn_to_neig_bld5",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "83":
                                 {"name":"tube_conn_to_neig_bld6",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "84":
                                 {"name":"junction",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "85":
                                 {"name":"bld_function",
                                  "enum":"building_function",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "86":
                                 {"name":"bld_type",
                                  "enum":"building_type",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "87":
                                 {"name":"field_AE",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "88":
                                 {"name":"field_AF",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "89":
                                 {"name":"field_B0",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "90":
                                 {"name":"field_B2",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "91":
                                 {"name":"field_B4",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "92":
                                 {"name":"purchaseable",
                                  "enum":"purchas",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "93":
                                 {"name":"field_B7",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "94":
                                 {"name":"field_B8",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "95":
                                 {"name":"price",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "96":
                                 {"name":"alien_detect_timout",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "97":
                                 {"name":"fixed_costs",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "98":
                                 {"name":"maximum_workforce",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "99":
                                 {"name":"current_workforce",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "100":
                                 {"name":"current_wage",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "101":
                                 {"name":"Income_per_capita",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "102":
                                 {"name":"owner",
                                  "enum":"Organizations",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "103":
                                 {"name":"start_base_flag",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"1-start base"
                                  },
                          "104":
                                 {"name":"field_CA",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "105":
                                 {"name":"field_CB",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "106":
                                 {"name":"$$needed",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "107":
                                 {"name":"respect",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "108":
                                 {"name":"allow_atac_time",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"1080(30 cec)"
                                  },
                          "109":
                                 {"name":"field_D0",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "110":
                                 {"name":"field_D2",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "111":
                                 {"name":"alien_eggs",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "112":
                                 {"name":"brainsuckers",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "113":
                                 {"name":"multiworm",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "114":
                                 {"name":"hyperworm",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "115":
                                 {"name":"chrystali",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "116":
                                 {"name":"anthropods",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "117":
                                 {"name":"skeletoids",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "118":
                                 {"name":"spitter",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "119":
                                 {"name":"poppers",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "120":
                                 {"name":"megaspawn",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "121":
                                 {"name":"psimorphs",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "122":
                                 {"name":"quinspawn",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "123":
                                 {"name":"micronoid_aggregate",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                          "124":
                                 {"name":"brainsuckers_pods",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  }
                        }
          },
       "98":{
                    "name": "base_struct",
                    "struc_count": 16,
                    "type": "struc",
					"sign":"False",
					"enum":"True",
					"enum_type":"1",
					"comment":"No Comment",
					"struc_member":"410",
					"struc":{
							"0":
                                 {"name":"bld_count",
                                  "enum":"building",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "1":
                                 {"name":"name",
                                  "enum":"False",
                                  "size":17,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"string",
                                  "comment":"No Comment"
                                  },
                           	"2":
                                 {"name":"field_13",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"unused, maybe end of name"
                                  },
                            "3":
                                 {"name":"used_flag",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"if base used, it set 1"
                                  },
                            "4":
                                 {"name":"layout 1_1",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "5":
                                 {"name":"layout 1_2",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "6":
                                 {"name":"layout 1_3",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "7":
                                 {"name":"layout 1_4",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "8":
                                 {"name":"layout 1_5",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "9":
                                 {"name":"layout 1_6",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "10":
                                 {"name":"layout 1_7",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "11":
                                 {"name":"layout 1_8",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "12":
                                 {"name":"layout 2_1",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "13":
                                 {"name":"layout 2_2",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "14":
                                 {"name":"layout 2_3",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "15":
                                 {"name":"layout 2_4",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "16":
                                 {"name":"layout 2_5",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "17":
                                 {"name":"layout 2_6",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "18":
                                 {"name":"layout 2_7",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "19":
                                 {"name":"layout 2_8",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "20":
                                 {"name":"layout 3_1",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "21":
                                 {"name":"layout 3_2",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "22":
                                 {"name":"layout 3_3",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "23":
                                 {"name":"layout 3_4",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "24":
                                 {"name":"layout 3_5",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "25":
                                 {"name":"layout 3_6",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "26":
                                 {"name":"layout 3_7",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "27":
                                 {"name":"layout 3_8",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "28":
                                 {"name":"layout 4_1",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "29":
                                 {"name":"layout 4_2",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "30":
                                 {"name":"layout 4_3",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "31":
                                 {"name":"layout 4_4",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "32":
                                 {"name":"layout 4_5",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "33":
                                 {"name":"layout 4_6",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "34":
                                 {"name":"layout 4_7",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "35":
                                 {"name":"layout 4_8",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "36":
                                 {"name":"layout 5_1",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "37":
                                 {"name":"layout 5_2",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "38":
                                 {"name":"layout 5_3",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "39":
                                 {"name":"layout 5_4",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "40":
                                 {"name":"layout 5_5",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "41":
                                 {"name":"layout 5_6",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "42":
                                 {"name":"layout 5_7",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "43":
                                 {"name":"layout 5_8",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "44":
                                 {"name":"layout 6_1",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "45":
                                 {"name":"layout 6_2",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "46":
                                 {"name":"layout 6_3",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "47":
                                 {"name":"layout 6_4",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "48":
                                 {"name":"layout 6_5",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "49":
                                 {"name":"layout 6_6",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "50":
                                 {"name":"layout 6_7",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "51":
                                 {"name":"layout 6_8",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "52":
                                 {"name":"layout 7_1",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "53":
                                 {"name":"layout 7_2",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "54":
                                 {"name":"layout 7_3",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "55":
                                 {"name":"layout 7_4",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "56":
                                 {"name":"layout 7_5",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "57":
                                 {"name":"layout 7_6",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "58":
                                 {"name":"layout 7_7",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "59":
                                 {"name":"layout 7_8",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "60":
                                 {"name":"layout 8_1",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "61":
                                 {"name":"layout 8_2",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "62":
                                 {"name":"layout 8_3",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "63":
                                 {"name":"layout 8_4",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "64":
                                 {"name":"layout 8_5",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "65":
                                 {"name":"layout 8_6",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "66":
                                 {"name":"layout 8_7",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "67":
                                 {"name":"layout 8_8",
                                  "enum":"facility",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "68":
                                 {"name":"build_day_1_1",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "69":
                                 {"name":"build_day_1_2",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "70":
                                 {"name":"build_day_1_3",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "71":
                                 {"name":"build_day_1_4",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "72":
                                 {"name":"build_day_1_5",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "73":
                                 {"name":"build_day_1_6",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "74":
                                 {"name":"build_day_1_7",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "75":
                                 {"name":"build_day_1_8",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "76":
                                 {"name":"build_day_2_1",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "77":
                                 {"name":"build_day_2_2",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "78":
                                 {"name":"build_day_2_3",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "79":
                                 {"name":"build_day_2_4",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "80":
                                 {"name":"build_day_2_5",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "81":
                                 {"name":"build_day_2_6",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "82":
                                 {"name":"build_day_2_7",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "83":
                                 {"name":"build_day_2_8",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "84":
                                 {"name":"build_day_3_1",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "85":
                                 {"name":"build_day_3_2",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "86":
                                 {"name":"build_day_3_3",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "87":
                                 {"name":"build_day_3_4",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "88":
                                 {"name":"build_day_3_5",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "89":
                                 {"name":"build_day_3_6",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "90":
                                 {"name":"build_day_3_7",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "91":
                                 {"name":"build_day_3_8",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "92":
                                 {"name":"build_day_4_1",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "93":
                                 {"name":"build_day_4_2",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "94":
                                 {"name":"build_day_4_3",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "95":
                                 {"name":"build_day_4_4",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "96":
                                 {"name":"build_day_4_5",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "97":
                                 {"name":"build_day_4_6",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "98":
                                 {"name":"build_day_4_7",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "99":
                                 {"name":"build_day_4_8",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "100":
                                 {"name":"build_day_5_1",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "101":
                                 {"name":"build_day_5_2",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "102":
                                 {"name":"build_day_5_3",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "103":
                                 {"name":"build_day_5_4",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "104":
                                 {"name":"build_day_5_5",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "105":
                                 {"name":"build_day_5_6",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "106":
                                 {"name":"build_day_5_7",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "107":
                                 {"name":"build_day_5_8",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "108":
                                 {"name":"build_day_6_1",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "109":
                                 {"name":"build_day_6_2",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "110":
                                 {"name":"build_day_6_3",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "111":
                                 {"name":"build_day_6_4",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "112":
                                 {"name":"build_day_6_5",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "113":
                                 {"name":"build_day_6_6",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "114":
                                 {"name":"build_day_6_7",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "115":
                                 {"name":"build_day_6_8",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "116":
                                 {"name":"build_day_7_1",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "117":
                                 {"name":"build_day_7_2",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "118":
                                 {"name":"build_day_7_3",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "119":
                                 {"name":"build_day_7_4",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "120":
                                 {"name":"build_day_7_5",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "121":
                                 {"name":"build_day_7_6",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "122":
                                 {"name":"build_day_7_7",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "123":
                                 {"name":"build_day_7_8",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "124":
                                 {"name":"build_day_8_1",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "125":
                                 {"name":"build_day_8_2",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "126":
                                 {"name":"build_day_8_3",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "127":
                                 {"name":"build_day_8_4",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "128":
                                 {"name":"build_day_8_5",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "129":
                                 {"name":"build_day_8_6",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "130":
                                 {"name":"build_day_8_7",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "131":
                                 {"name":"build_day_8_8",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "132":
                                 {"name":"empty section",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "133":
                                 {"name":"Bolter 4000 Laser Gun",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "134":
                                 {"name":"Lancer 7000 Laser Gun",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "135":
                                 {"name":"Rendor Plasma Gun",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "136":
                                 {"name":"Lineage Plasma Cannon",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "137":
                                 {"name":"Plasma Multi System",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "138":
                                 {"name":"Light Disruptor Beam",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "139":
                                 {"name":"Medium Disruptor Beam",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "140":
                                 {"name":"Heavy Disruptor Beam",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "141":
                                 {"name":"40mm Auto Cannon",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "142":
                                 {"name":"Janitor Missile Array",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "143":
                                 {"name":"Justice Missile Launcher",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "144":
                                 {"name":"Prophet Missile Array",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "145":
                                 {"name":"Retribution Missile Launcher",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "146":
                                 {"name":"Disruptor Bomb Launcher",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "147":
                                 {"name":"Stasis Bomb Launcher",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "148":
                                 {"name":"Disruptor Multi-Bomb Launcher",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "149":
                                 {"name":"Laser Defense Array",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "150":
                                 {"name":"Plasma Defense Array",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "151":
                                 {"name":"SD Standard",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "152":
                                 {"name":"SD Delux",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "153":
                                 {"name":"SD Sports",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "154":
                                 {"name":"SD Turbo",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "155":
                                 {"name":"SD Elite",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "156":
                                 {"name":"SD Special",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "157":
                                 {"name":"40mm Auto Cannon Turret",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "158":
                                 {"name":"Airguard Anti-Air Cannon",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "159":
                                 {"name":"GLM Array",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "160":
                                 {"name":"Plasma Turret Cannon",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "161":
                                 {"name":"GLM Air Defense",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "162":
                                 {"name":"Rumble Cannon",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "163":
                                 {"name":"Rumble Cannon",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "164":
                                 {"name":"Metro Roadhog",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "165":
                                 {"name":"Metro Roadgrav",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "166":
                                 {"name":"Metro Turbograv",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "167":
                                 {"name":"Metro Multipower Plus",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "168":
                                 {"name":"Light Weapons Control",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "169":
                                 {"name":"Medium Weapons Control",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "170":
                                 {"name":"Heavy Weapons Control",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "171":
                                 {"name":"Advanced Control System",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "172":
                                 {"name":"Cargo Module",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "173":
                                 {"name":"Passenger Module",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "174":
                                 {"name":"Bio-Transport Module",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "175":
                                 {"name":"Missile Evasion Matrix",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "176":
                                 {"name":"Small Disruption Shield",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "177":
                                 {"name":"Large Disruption Shield",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "178":
                                 {"name":"Cloaking Field",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "179":
                                 {"name":"Teleporter",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "180":
                                 {"name":"Dimension Shifter",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "181":
                                 {"name":"Empty",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "182":
                                 {"name":"Megapol AP Grenade",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "183":
                                 {"name":"Megapol Stun Grenade",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "184":
                                 {"name":"Megapol Smoke Grenade",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "185":
                                 {"name":"Marsec Proximity Mine",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "186":
                                 {"name":"Marsec High Explosive",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "187":
                                 {"name":"Megapol Lawpistol",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "188":
                                 {"name":"Megapol Lawpistol Clip",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "189":
                                 {"name":"Marsec M4000 Machine Gun",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "190":
                                 {"name":"Marsec M4000 Gun Clip",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "191":
                                 {"name":"Megapol Laser Sniper Gun",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "192":
                                 {"name":"Megapol Laser Pod",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "193":
                                 {"name":"Megapol Auto Cannon",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "194":
                                 {"name":"Auto Cannon AP Clip",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "195":
                                 {"name":"Auto Cannon HE Clip",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "196":
                                 {"name":"Auto Cannon IN Clip",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "197":
                                 {"name":"Megapol Plasma Gun",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "198":
                                 {"name":"Megapol Plasma Pod",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "199":
                                 {"name":"Marsec Heavy Launcher",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "200":
                                 {"name":"Heavy Launcher AG Missile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "201":
                                 {"name":"Heavy Launcher HE Missile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "202":
                                 {"name":"Heavy Launcher IN Missile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "203":
                                 {"name":"Marsec MiniLauncher",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "204":
                                 {"name":"MiniLauncher AG Missile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "205":
                                 {"name":"MiniLauncher HE Missile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "206":
                                 {"name":"MiniLauncher IN Missile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "207":
                                 {"name":"Megapol Stun Grapple",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "208":
                                 {"name":"Alien Gas Grenade",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "209":
                                 {"name":"Tracker Gun Clip",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "210":
                                 {"name":"Tracker Gun",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "211":
                                 {"name":"Multi-Tracker",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "212":
                                 {"name":"PSI-Grenade",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "213":
                                 {"name":"ForceWeb",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "214":
                                 {"name":"Toxigun",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "215":
                                 {"name":"Toxigun A-Clip",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "216":
                                 {"name":"Toxigun B-Clip",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "217":
                                 {"name":"Toxigun C-Clip",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "218":
                                 {"name":"Dimension Destabiliser",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "219":
                                 {"name":"Mind Shield",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "220":
                                 {"name":"Mind Bender",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "221":
                                 {"name":"Alien Detector",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "222":
                                 {"name":"Disruptor Gun",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "223":
                                 {"name":"Devastator Cannon",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "224":
                                 {"name":"Boomeroid",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "225":
                                 {"name":"Power Sword",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "226":
                                 {"name":"Brainsucker Launcher",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "227":
                                 {"name":"Entropy Launcher",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "228":
                                 {"name":"Dimension Missile Launcher",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "229":
                                 {"name":"Dimension Missile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "230":
                                 {"name":"Vortex Mine",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "231":
                                 {"name":"Personal Disruptor Shield",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "232":
                                 {"name":"Personal Teleporter",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "233":
                                 {"name":"Personal Cloaking Field",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "234":
                                 {"name":"Dimension Force Field",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "235":
                                 {"name":"Energy Pod",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "236":
                                 {"name":"Medi-kit",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "237":
                                 {"name":"Motion Scanner",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "238":
                                 {"name":"Brainsucker Pod",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "239":
                                 {"name":"Entropy Pod",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "240":
                                 {"name":"Incendiary Grenade",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "241":
                                 {"name":"Megapol Leg Armor",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "242":
                                 {"name":"Megapol Body Armor",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "243":
                                 {"name":"Megapol Right Arm Armor",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "244":
                                 {"name":"Megapol Left Arm Armor",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "245":
                                 {"name":"Megapol Helmet",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "246":
                                 {"name":"Marsec Leg Units",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "247":
                                 {"name":"Marsec Body Unit",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "248":
                                 {"name":"Marsec Right Arm Unit",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "249":
                                 {"name":"Marsec Left Arm Unit",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "250":
                                 {"name":"Marsec Head Unit",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "251":
                                 {"name":"X-COM Leg Shields",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "252":
                                 {"name":"X-COM Body Shield",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "253":
                                 {"name":"X-COM Right Arm Shield",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "254":
                                 {"name":"X-COM Left Arm Shield",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "255":
                                 {"name":"X-COM Head Shield",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "256":
                                 {"name":"Psimorphs Mindbender",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "257":
                                 {"name":"Megaspawns Disruptor",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "258":
                                 {"name":"Megaspawns Launcher",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "259":
                                 {"name":"Spitters Vomit Funnel",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "260":
                                 {"name":"Multiworms Spit",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "261":
                                 {"name":"Alien Eggs Vomit Tube",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "262":
                                 {"name":"Hyperworms Bite",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "263":
                                 {"name":"Queenspawns Tentacles",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "264":
                                 {"name":"Poppers Bomb",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "265":
                                 {"name":"Psiclone",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "266":
                                 {"name":"Elerium",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "267":
                                 {"name":"Alien Artifact",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "268":
                                 {"name":"Fusion Powerfuel",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "269":
                                 {"name":"Elerium-115",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "270":
                                 {"name":"Zorium",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "271":
                                 {"name":"Multi-Cannon Round",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "272":
                                 {"name":"Janitor Missile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "273":
                                 {"name":"Justice Missile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "274":
                                 {"name":"Prophet Missile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "275":
                                 {"name":"Retribution Missile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "276":
                                 {"name":"Disruptor Bomb",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "277":
                                 {"name":"Stasis Bomb",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "278":
                                 {"name":"Disruptor Multi-Bomb",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "279":
                                 {"name":"Repeater 40mm Cannon Round",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "280":
                                 {"name":"Airguard 52mm Cannon Round",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "281":
                                 {"name":"Ground Launched Missile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "282":
                                 {"name":"Air Defense Missile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "283":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "284":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "285":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "286":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "287":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "288":
                                 {"name":"#Megapol Lawpistol Clip",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "289":
                                 {"name":"#Marsec M4000 Gun Clip",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "290":
                                 {"name":"#Megapol Laser Pod",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "291":
                                 {"name":"#Auto Cannon AP Clip",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "292":
                                 {"name":"#Auto Cannon HE Clip",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "293":
                                 {"name":"#Auto Cannon I Clip",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "294":
                                 {"name":"#Megapol Plasma Pod",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "295":
                                 {"name":"#Heavy Launcher Alien Gas Missile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "296":
                                 {"name":"#Heavy Launcher Blaster MIssile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "297":
                                 {"name":"#Heavy Launcher Incendiary Missile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "298":
                                 {"name":"#MiniLauncher Alien Gas Missile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "299":
                                 {"name":"#MiniLauncher HE Missile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "300":
                                 {"name":"#MiniLauncher I Missile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "301":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "302":
                                 {"name":"#Toxigun A-Clip",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "303":
                                 {"name":"#Toxigun B-Clip",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "304":
                                 {"name":"#Toxigun C-Clip",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "305":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "306":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "307":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "308":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "309":
                                 {"name":"#Brainsucker Pod",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "310":
                                 {"name":"#Entropy Pod",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "311":
                                 {"name":"#Dimension Missile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "312":
                                 {"name":"#Dimension Missile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "313":
                                 {"name":"#Dimension Missile",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "314":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "315":
                                 {"name":"#Tracker Gun Clip",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "316":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "317":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "318":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "319":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "320":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "321":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "322":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "323":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "324":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "325":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "326":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "327":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "328":
                                 {"name":"-",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "329":
                                 {"name":"cont_Alien Egg(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "330":
                                 {"name":"cont_Brainsucker(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "331":
                                 {"name":"cont_Multiworm(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "332":
                                 {"name":"cont_Hyperworm(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "333":
                                 {"name":"cont_Chrysalis(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "334":
                                 {"name":"cont_Anthropod(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "335":
                                 {"name":"cont_Skeletoid(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "336":
                                 {"name":"cont_Spitter(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "337":
                                 {"name":"cont_Popper(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "338":
                                 {"name":"cont_Megaspawn(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "339":
                                 {"name":"cont_Psimorph(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "340":
                                 {"name":"cont_Queenspawn(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "341":
                                 {"name":"cont_Micronoid Aggregate(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "342":
                                 {"name":"cont_Brainsucker Pod(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "343":
                                 {"name":"cont_Overspawn(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "344":
                                 {"name":"cont_Alien Egg(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "345":
                                 {"name":"cont_Brainsucker(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "346":
                                 {"name":"cont_Multiworm(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"cont_No Comment"
                                  },
                            "347":
                                 {"name":"cont_Hyperworm(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "348":
                                 {"name":"cont_Chrysalis(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "349":
                                 {"name":"cont_Anthropod(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "350":
                                 {"name":"cont_Skeletoid(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "351":
                                 {"name":"cont_Spitter(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "352":
                                 {"name":"cont_Popper(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "353":
                                 {"name":"cont_Megaspawn(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "354":
                                 {"name":"cont_Psimorph(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "355":
                                 {"name":"cont_Queenspawn(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "356":
                                 {"name":"cont_Micronoid Aggregate(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "357":
                                 {"name":"cont_Brainsucker Pod(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "358":
                                 {"name":"cont_Overspawn(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
						    "359":
                                 {"name":"adv_cont_Alien Egg(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "360":
                                 {"name":"adv_cont_Brainsucker(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "361":
                                 {"name":"adv_cont_Multiworm(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "362":
                                 {"name":"adv_cont_Hyperworm(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "363":
                                 {"name":"adv_cont_Chrysalis(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "364":
                                 {"name":"adv_cont_Anthropod(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "365":
                                 {"name":"adv_cont_Skeletoid(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "366":
                                 {"name":"adv_cont_Spitter(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "367":
                                 {"name":"adv_cont_Popper(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "368":
                                 {"name":"adv_cont_Megaspawn(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "369":
                                 {"name":"adv_cont_Psimorph(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "370":
                                 {"name":"adv_cont_Queenspawn(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "371":
                                 {"name":"adv_cont_Micronoid Aggregate(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "372":
                                 {"name":"adv_cont_Brainsucker Pod(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "373":
                                 {"name":"adv_cont_Overspawn(live)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "374":
                                 {"name":"adv_cont_Alien Egg(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "375":
                                 {"name":"adv_cont__Brainsucker(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "376":
                                 {"name":"adv_cont_Multiworm(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"cont_No Comment"
                                  },
                            "377":
                                 {"name":"adv_cont_Hyperworm(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "378":
                                 {"name":"adv_cont_Chrysalis(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "379":
                                 {"name":"adv_cont_Anthropod(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "380":
                                 {"name":"adv_cont_Skeletoid(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "381":
                                 {"name":"adv_cont_Spitter(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "382":
                                 {"name":"adv_cont_Popper(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "383":
                                 {"name":"adv_cont_Megaspawn(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "384":
                                 {"name":"adv_cont_Psimorph(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "385":
                                 {"name":"adv_cont_Queenspawn(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "386":
                                 {"name":"adv_cont_Micronoid Aggregate(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "387":
                                 {"name":"adv_cont_Brainsucker Pod(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "388":
                                 {"name":"adv_cont_Overspawn(dead)",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "389":
                                 {"name":"unused1",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "390":
                                 {"name":"unused2",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "391":
                                 {"name":"unused3",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "392":
                                 {"name":"unused4",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "393":
                                 {"name":"unused5",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "394":
                                 {"name":"unused6",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "395":
                                 {"name":"unused7",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "396":
                                 {"name":"unused8",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "397":
                                 {"name":"unused9",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "398":
                                 {"name":"unused10",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "399":
                                 {"name":"unused11",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "400":
                                 {"name":"unused12",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "401":
                                 {"name":"unused13",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "402":
                                 {"name":"unused14",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "403":
                                 {"name":"unused15",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "404":
                                 {"name":"unused16",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "405":
                                 {"name":"unused17",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "406":
                                 {"name":"unused18",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "407":
                                 {"name":"unused19",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "408":
                                 {"name":"unused20",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                            "409":
                                 {"name":"rain_flag",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  }
                            }
           },
       "100":{
                "name": "facility_data",
                    "struc_count": 34,
                    "type": "struc",
					"sign":"False",
					"enum":"facility",
					"enum_type":"False",
					"comment":"No Comment",
					"struc_member":"10",
					"struc":{
					         "0":
                                 {"name":"price",
                                  "enum":"False",
                                  "size":4,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "1":
                                 {"name":"image_offset",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "2":
                                 {"name":"fcl_size",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "3":
                                 {"name":"day_to_builds",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "4":
                                 {"name":"maintainance_cost",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "5":
                                 {"name":"capacity",
                                  "enum":"False",
                                  "size":2,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "6":
                                 {"name":"image_?",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "7":
                                 {"name":"buildable",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "8":
                                 {"name":"unused1",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "9":
                                 {"name":"unused2",
                                  "enum":"False",
                                  "size":1,
                                  "elements":0,
                                  "type":"num",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  }

                             }
           },

       "100":{
                    "name": "unit_select_struc",
                    "struc_count": 20,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"seems not used",
					"struc_member":"4",
					"struc":{
					         "0":
                                 {"name":"unit",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"True",
                                  "comment":"No Comment"
                                  },
                             "1":
                                 {"name":"unit_pointer",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"True",
                                  "comment":"No Comment"
                                  },
                             "2":
                                 {"name":"type",
                                  "enum":"False",
                                  "size":1,
                                  "sign":"True",
                                  "comment":"0-vehicle, 1-agent"
                                  },
                             "3":
                                 {"name":"field_7",
                                  "enum":"False",
                                  "size":1,
                                  "sign":"True",
                                  "comment":"always zero"
                                  }
                            }
           },
       "96":{
                    "name": "funds_struc_save",
                    "struc_count": 27,
                    "type": "struc",
					"sign":"False",
					"enum":"Organizations",
					"enum_type":"False",
					"comment":"No Comment",
					"struc_member":"114",
					"struc":{
					         "0":
                                 {"name":"race",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"Not used"
                                  },
                               "1":
                                 {"name":"org_member",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"Not used"
                                  },
                               "2":
                                 {"name":"Security_level",
                                  "enum":"False",
                                  "size":1,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "3":
                                 {"name":"Security_number",
                                  "enum":"False",
                                  "size":1,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "4":
                                 {"name":"balance",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "5":
                                 {"name":"external_income",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "6":
                                 {"name":"rebuildrate",
                                  "enum":"False",
                                  "size":1,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "7":
                                 {"name":"like_alien",
                                  "enum":"like_alien",
                                  "size":1,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "8":
                                 {"name":"combat_value",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "9":
                                 {"name":"bld_count",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "10":
                                 {"name":"fund_history52",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "11":
                                 {"name":"fund_history51",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "12":
                                 {"name":"fund_history50",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "13":
                                 {"name":"fund_history49",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "14":
                                 {"name":"fund_history48",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "15":
                                 {"name":"fund_history47",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "16":
                                 {"name":"fund_history46",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "17":
                                 {"name":"fund_history45",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "18":
                                 {"name":"fund_history44",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "19":
                                 {"name":"fund_history43",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "20":
                                 {"name":"fund_history42",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "21":
                                 {"name":"fund_history41",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "22":
                                 {"name":"fund_history40",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "23":
                                 {"name":"fund_history39",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "24":
                                 {"name":"fund_history38",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "25":
                                 {"name":"fund_history37",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "26":
                                 {"name":"fund_history36",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "27":
                                 {"name":"fund_history35",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "28":
                                 {"name":"fund_history34",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "29":
                                 {"name":"fund_history33",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "30":
                                 {"name":"fund_history32",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "31":
                                 {"name":"fund_history31",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "32":
                                 {"name":"fund_history30",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "33":
                                 {"name":"fund_history29",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "34":
                                 {"name":"fund_history28",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "35":
                                 {"name":"fund_history27",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "36":
                                 {"name":"fund_history26",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "37":
                                 {"name":"fund_history25",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "38":
                                 {"name":"fund_history24",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "39":
                                 {"name":"fund_history23",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "40":
                                 {"name":"fund_history22",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "41":
                                 {"name":"fund_history21",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "42":
                                 {"name":"fund_history20",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "43":
                                 {"name":"fund_history19",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "44":
                                 {"name":"fund_history18",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "45":
                                 {"name":"fund_history17",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "46":
                                 {"name":"fund_history16",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "47":
                                 {"name":"fund_history15",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "48":
                                 {"name":"fund_history14",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "49":
                                 {"name":"fund_history13",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "50":
                                 {"name":"fund_history12",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "51":
                                 {"name":"fund_history11",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "52":
                                 {"name":"fund_history10",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "53":
                                 {"name":"fund_history9",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "54":
                                 {"name":"fund_history8",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "55":
                                 {"name":"fund_history7",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "56":
                                 {"name":"fund_history6",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "57":
                                 {"name":"fund_history5",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "58":
                                 {"name":"fund_history4",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "59":
                                 {"name":"fund_history3",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "60":
                                 {"name":"fund_history2",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "61":
                                 {"name":"fund_history1",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "62":
                                 {"name":"funding_history52",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "63":
                                 {"name":"funding_history51",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "64":
                                 {"name":"funding_history50",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "65":
                                 {"name":"funding_history49",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "66":
                                 {"name":"funding_history48",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "67":
                                 {"name":"funding_history47",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "68":
                                 {"name":"funding_history46",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "69":
                                 {"name":"funding_history45",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "70":
                                 {"name":"funding_history44",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "71":
                                 {"name":"funding_history43",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "72":
                                 {"name":"funding_history42",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "73":
                                 {"name":"funding_history41",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "74":
                                 {"name":"funding_history40",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "75":
                                 {"name":"funding_history39",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "76":
                                 {"name":"funding_history38",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "77":
                                 {"name":"funding_history37",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "78":
                                 {"name":"funding_history36",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "79":
                                 {"name":"funding_history35",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "80":
                                 {"name":"funding_history34",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "81":
                                 {"name":"funding_history33",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "82":
                                 {"name":"funding_history32",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "83":
                                 {"name":"funding_history31",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "84":
                                 {"name":"funding_history30",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "85":
                                 {"name":"funding_history29",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "86":
                                 {"name":"funding_history28",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "87":
                                 {"name":"funding_history27",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "88":
                                 {"name":"funding_history26",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "89":
                                 {"name":"funding_history25",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "90":
                                 {"name":"funding_history24",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "91":
                                 {"name":"funding_history23",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "92":
                                 {"name":"funding_history22",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "93":
                                 {"name":"funding_history21",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "94":
                                 {"name":"funding_history20",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "95":
                                 {"name":"funding_history19",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "96":
                                 {"name":"funding_history18",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "97":
                                 {"name":"funding_history17",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "98":
                                 {"name":"funding_history16",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "99":
                                 {"name":"funding_history15",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "100":
                                 {"name":"funding_history14",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "101":
                                 {"name":"funding_history13",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "102":
                                 {"name":"funding_history12",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "103":
                                 {"name":"funding_history11",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "104":
                                 {"name":"funding_history10",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "105":
                                 {"name":"funding_history9",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "106":
                                 {"name":"funding_history8",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "107":
                                 {"name":"funding_history7",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "108":
                                 {"name":"funding_history6",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "109":
                                 {"name":"funding_history5",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "110":
                                 {"name":"funding_history4",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "111":
                                 {"name":"funding_history3",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "112":
                                 {"name":"funding_history2",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                               "113":
                                 {"name":"funding_history1",
                                  "enum":"False",
                                  "size":4,
                                  "sign":"False",
                                  "comment":"No Comment"
                                  }
					}
           },
       "97":{
                    "name": "citymap_z0",
                    "struc_count": 1000,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"No Comment",
					"struc_member":"10",
					"struc":{
					         "0":
                                  {"name":"tile0",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "1":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "2":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "3":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "4":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "5":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "6":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "7":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "8":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "9":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   }
                            }
           },
       "98":{
                    "name": "citymap_z1",
                    "struc_count": 1000,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"No Comment",
					"struc_member":"10",
					"struc":{
					         "0":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "1":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "2":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "3":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "4":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "5":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "6":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "7":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "8":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "9":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   }
                            }
           },
       "99":{
                    "name": "citymap_z2",
                    "struc_count": 1000,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"No Comment",
					"struc_member":"10",
					"struc":{
					         "0":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "1":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "2":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "3":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "4":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "5":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "6":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "7":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "8":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "9":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   }
                            }
           },
       "100":{
                    "name": "citymap_z3",
                    "struc_count": 1000,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"No Comment",
					"struc_member":"10",
					"struc":{
					         "0":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "1":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "2":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "3":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "4":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "5":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "6":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "7":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "8":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "9":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   }
                            }
           },
       "101":{
                    "name": "citymap_z4",
                    "struc_count": 1000,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"No Comment",
					"struc_member":"10",
					"struc":{
					         "0":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "1":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "2":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "3":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "4":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "5":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "6":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "7":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "8":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "9":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   }
                            }
           },
       "102":{
                    "name": "citymap_z5",
                    "struc_count": 1000,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"No Comment",
					"struc_member":"10",
					"struc":{
					         "0":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "1":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "2":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "3":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "4":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "5":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "6":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "7":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "8":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "9":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   }
                            }
           },
       "103":{
                    "name": "citymap_z6",
                    "struc_count": 1000,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"No Comment",
					"struc_member":"10",
					"struc":{
					         "0":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "1":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "2":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "3":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "4":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "5":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "6":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "7":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "8":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "9":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   }
                            }
           },
       "104":{
                    "name": "citymap_z7",
                    "struc_count": 1000,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"No Comment",
					"struc_member":"10",
					"struc":{
					         "0":
                                  {"name":"tile0",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "1":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "2":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "3":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "4":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "5":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "6":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "7":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "8":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "9":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   }
                            }
           },
       "105":{
                    "name": "citymap_z8",
                    "struc_count": 1000,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"No Comment",
					"struc_member":"10",
					"struc":{
					         "0":
                                  {"name":"tile0",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "1":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "2":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "3":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "4":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "5":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "6":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "7":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "8":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "9":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   }
                            }
           },
       "106":{
                    "name": "citymap_z9",
                    "struc_count": 1000,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"No Comment",
					"struc_member":"10",
					"struc":{
					         "0":
                                  {"name":"tile0",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "1":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "2":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "3":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "4":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "5":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "6":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "7":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "8":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "9":
                                  {"name":"tile",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   }
                            }
           },
       "107":{
                    "name": "ufo_objects",
                    "struc_count": 2,
                    "type": "struc",
					"sign":"False",
					"enum":"demension",
					"enum_type":"False",
					"comment":"No Comment",
					"struc_member":"217",
					"struc":{
					         "0":
                                  {"name":"portal_demension",
                                   "enum":"portal_home",
                                   "size":4,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "1":
                                  {"name":"portal_x_coord_1",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "2":
                                  {"name":"portal_x_coord_2",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "3":
                                  {"name":"portal_x_coord_3",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "4":
                                  {"name":"portal_x_coord_4",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "5":
                                  {"name":"portal_x_coord_5",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "6":
                                  {"name":"portal_x_coord_6",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "7":
                                  {"name":"portal_x_coord_7",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "8":
                                  {"name":"portal_x_coord_8",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "9":
                                  {"name":"portal_x_coord_9",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "10":
                                  {"name":"portal_x_coord_10",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "11":
                                  {"name":"portal_y_coord_1",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "12":
                                  {"name":"portal_y_coord_2",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "13":
                                  {"name":"portal_y_coord_3",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "14":
                                  {"name":"portal_y_coord_4",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "15":
                                  {"name":"portal_y_coord_5",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "16":
                                  {"name":"portal_y_coord_6",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "17":
                                  {"name":"portal_y_coord_7",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "18":
                                  {"name":"portal_y_coord_8",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "19":
                                  {"name":"portal_y_coord_9",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "20":
                                  {"name":"portal_y_coord_10",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "21":
                                  {"name":"portal_z_coord_1",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "22":
                                  {"name":"portal_z_coord_2",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "23":
                                  {"name":"portal_z_coord_3",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "24":
                                  {"name":"portal_z_coord_4",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "25":
                                  {"name":"portal_z_coord_5",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "26":
                                  {"name":"portal_z_coord_6",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "27":
                                  {"name":"portal_z_coord_7",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "28":
                                  {"name":"portal_z_coord_8",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "29":
                                  {"name":"portal_z_coord_9",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "30":
                                  {"name":"portal_z_coord_10",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "31":
                                  {"name":"portal_1_direction",
                                   "enum":"portal_direction",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "32":
                                  {"name":"portal_2_direction",
                                   "enum":"portal_direction",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "33":
                                  {"name":"portal_3_direction",
                                   "enum":"portal_direction",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "34":
                                  {"name":"portal_4_direction",
                                   "enum":"portal_direction",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "35":
                                  {"name":"portal_5_direction",
                                   "enum":"portal_direction",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "36":
                                  {"name":"portal_6_direction",
                                   "enum":"portal_direction",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "37":
                                  {"name":"portal_7_direction",
                                   "enum":"portal_direction",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "38":
                                  {"name":"portal_8_direction",
                                   "enum":"portal_direction",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "39":
                                  {"name":"portal_9_direction",
                                   "enum":"portal_direction",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "40":
                                  {"name":"portal_10_direction",
                                   "enum":"portal_direction",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "41":
                                  {"name":"portal_num1",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "42":
                                  {"name":"portal_num2",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "43":
                                  {"name":"portal_num3",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "44":
                                  {"name":"portal_num4",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "45":
                                  {"name":"portal_num5",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "46":
                                  {"name":"portal_num6",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "47":
                                  {"name":"portal_num7",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "48":
                                  {"name":"portal_num8",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "49":
                                  {"name":"portal_num9",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "50":
                                  {"name":"portal_num10",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "51":
                                  {"name":"field_68",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "52":
                                  {"name":"field_6A",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "53":
                                  {"name":"field_6C",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "54":
                                  {"name":"field_6E",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "55":
                                  {"name":"field_70",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "56":
                                  {"name":"field_72_1",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "57":
                                  {"name":"field_72_2",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "58":
                                  {"name":"field_74_3",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "59":
                                  {"name":"field_75_4",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "60":
                                  {"name":"field_76_5",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "61":
                                  {"name":"field_77_6",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "62":
                                  {"name":"field_78_7",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "63":
                                  {"name":"field_7A_8",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "64":
                                  {"name":"field_7B_9",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "65":
                                  {"name":"field_7C_10",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "66":
                                  {"name":"field_7E_1",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "67":
                                  {"name":"field_7F_2",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "68":
                                  {"name":"field_80_3",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "69":
                                  {"name":"field_81_4",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "70":
                                  {"name":"field_82_5",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "71":
                                  {"name":"field_83_6",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "72":
                                  {"name":"field_84_7",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "73":
                                  {"name":"field_85_8",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "74":
                                  {"name":"field_86_9",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "75":
                                  {"name":"field_87_10",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "76":
                                  {"name":"field_86",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "77":
                                  {"name":"field_87",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "78":
                                  {"name":"field_88",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "79":
                                  {"name":"prob",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "80":
                                  {"name":"scout",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "81":
                                  {"name":"transp",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "82":
                                  {"name":"fast_ship",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "83":
                                  {"name":"destroyer",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "84":
                                  {"name":"assault_ship",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "85":
                                  {"name":"bomber",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "86":
                                  {"name":"escort",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "87":
                                  {"name":"battlship",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "88":
                                  {"name":"mothership",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "89":
                                  {"name":"field_A0_1",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "90":
                                  {"name":"field_A0_2",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "91":
                                  {"name":"field_A0_3",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "92":
                                  {"name":"field_A0_4",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "93":
                                  {"name":"field_A0_5",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "94":
                                  {"name":"field_A0_6",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "95":
                                  {"name":"field_A0_7",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "96":
                                  {"name":"field_A0_8",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "97":
                                  {"name":"field_A0_9",
                                   "enum":"False",
                                   "size":4,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "98":
                                  {"name":"field_A0_1",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "99":
                                  {"name":"field_A0_2",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "100":
                                  {"name":"field_A0_3",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "101":
                                  {"name":"field_A0_4",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "102":
                                  {"name":"field_A0_5",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "103":
                                  {"name":"field_A0_6",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "104":
                                  {"name":"field_A0_7",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "105":
                                  {"name":"field_A0_8",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "106":
                                  {"name":"field_A0_9",
                                   "enum":"False",
                                   "size":4,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "107":
                                  {"name":"field_A0_1",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "108":
                                  {"name":"field_A0_2",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "109":
                                  {"name":"field_A0_3",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "110":
                                  {"name":"field_A0_4",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "111":
                                  {"name":"field_A0_5",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "112":
                                  {"name":"field_A0_6",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "113":
                                  {"name":"field_A0_7",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "114":
                                  {"name":"field_A0_8",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "115":
                                  {"name":"field_A0_9",
                                   "enum":"False",
                                   "size":4,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "116":
                                  {"name":"field_A0_1",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "117":
                                  {"name":"field_A0_2",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "118":
                                  {"name":"field_A0_3",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "119":
                                  {"name":"field_A0_4",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "120":
                                  {"name":"field_A0_5",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "121":
                                  {"name":"field_A0_6",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "122":
                                  {"name":"field_A0_7",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "123":
                                  {"name":"field_A0_8",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "124":
                                  {"name":"field_A0_9",
                                   "enum":"False",
                                   "size":4,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "125":
                                  {"name":"field_A0_1",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "126":
                                  {"name":"field_A0_2",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "127":
                                  {"name":"field_A0_3",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "128":
                                  {"name":"field_A0_4",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "129":
                                  {"name":"field_A0_5",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "130":
                                  {"name":"field_A0_6",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "131":
                                  {"name":"field_A0_7",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "132":
                                  {"name":"field_A0_8",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "133":
                                  {"name":"field_A0_9",
                                   "enum":"False",
                                   "size":4,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "134":
                                  {"name":"field_A0_1",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "135":
                                  {"name":"field_A0_2",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "136":
                                  {"name":"field_A0_3",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "137":
                                  {"name":"field_A0_4",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "138":
                                  {"name":"field_A0_5",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "139":
                                  {"name":"field_A0_6",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "140":
                                  {"name":"field_A0_7",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "141":
                                  {"name":"field_A0_8",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "142":
                                  {"name":"field_A0_9",
                                   "enum":"False",
                                   "size":4,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "143":
                                  {"name":"field_A0_1",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "144":
                                  {"name":"field_A0_2",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "145":
                                  {"name":"field_A0_3",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "146":
                                  {"name":"field_A0_4",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "147":
                                  {"name":"field_A0_5",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "148":
                                  {"name":"field_A0_6",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "149":
                                  {"name":"field_A0_7",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "150":
                                  {"name":"field_A0_8",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "151":
                                  {"name":"field_A0_9",
                                   "enum":"False",
                                   "size":4,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "152":
                                  {"name":"field_A0_1",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "153":
                                  {"name":"field_A0_2",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "154":
                                  {"name":"field_A0_3",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "155":
                                  {"name":"field_A0_4",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "156":
                                  {"name":"field_A0_5",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "157":
                                  {"name":"field_A0_6",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "158":
                                  {"name":"field_A0_7",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "159":
                                  {"name":"field_A0_8",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "160":
                                  {"name":"field_A0_9",
                                   "enum":"False",
                                   "size":4,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "161":
                                  {"name":"field_A0_1",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "162":
                                  {"name":"field_A0_2",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "163":
                                  {"name":"field_A0_3",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "164":
                                  {"name":"field_A0_4",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "165":
                                  {"name":"field_A0_5",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "166":
                                  {"name":"field_A0_6",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "167":
                                  {"name":"field_A0_7",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "168":
                                  {"name":"field_A0_8",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "169":
                                  {"name":"field_A0_9",
                                   "enum":"False",
                                   "size":4,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "170":
                                  {"name":"field_A0_1",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "171":
                                  {"name":"field_A0_2",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "172":
                                  {"name":"field_A0_3",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "173":
                                  {"name":"field_A0_4",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "174":
                                  {"name":"field_A0_5",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "175":
                                  {"name":"field_A0_6",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "176":
                                  {"name":"field_A0_7",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "177":
                                  {"name":"field_A0_8",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "178":
                                  {"name":"field_A0_9",
                                   "enum":"False",
                                   "size":4,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "179":
                                  {"name":"field_A0_1",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "180":
                                  {"name":"field_A0_2",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "181":
                                  {"name":"field_A0_3",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "182":
                                  {"name":"field_A0_4",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "183":
                                  {"name":"field_A0_5",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "184":
                                  {"name":"field_A0_6",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "185":
                                  {"name":"field_A0_7",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "186":
                                  {"name":"field_A0_8",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "187":
                                  {"name":"field_A0_9",
                                   "enum":"False",
                                   "size":4,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "188":
                                  {"name":"field_A0_1",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "189":
                                  {"name":"field_A0_2",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "190":
                                  {"name":"field_A0_3",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "191":
                                  {"name":"field_A0_4",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "192":
                                  {"name":"field_A0_5",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "193":
                                  {"name":"field_A0_6",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "194":
                                  {"name":"field_A0_7",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "195":
                                  {"name":"field_A0_8",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "196":
                                  {"name":"field_A0_9",
                                   "enum":"False",
                                   "size":4,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "197":
                                  {"name":"field_A0_1",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "198":
                                  {"name":"field_A0_2",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "199":
                                  {"name":"field_A0_3",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "200":
                                  {"name":"field_A0_4",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "201":
                                  {"name":"field_A0_5",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "202":
                                  {"name":"field_A0_6",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "203":
                                  {"name":"field_A0_7",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "204":
                                  {"name":"field_A0_8",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "205":
                                  {"name":"field_A0_9",
                                   "enum":"False",
                                   "size":4,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "206":
                                  {"name":"field_A0_1",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "207":
                                  {"name":"field_A0_2",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "208":
                                  {"name":"field_A0_3",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "209":
                                  {"name":"field_A0_4",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "210":
                                  {"name":"field_A0_5",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "211":
                                  {"name":"field_A0_6",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "212":
                                  {"name":"field_A0_7",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "213":
                                  {"name":"field_A0_8",
                                   "enum":"False",
                                   "size":6,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "214":
                                  {"name":"field_A0_9",
                                   "enum":"False",
                                   "size":4,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "215":
                                  {"name":"field_2D0",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "216":
                                  {"name":"field_2D2",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   }
                     }

           },
       "108":{
                    "name": "reserch",
                    "struc_count": 99,
                    "type": "struc",
					"sign":"False",
					"enum":"reserch",
					"enum_type":"False",
					"comment":"No Comment",
					"struc_member":"5",
					"struc":{
					         "0":
                                  {"name":"reserch_flag",
                                   "enum":"reserch_enebled",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "1":
                                  {"name":"base",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "2":
                                  {"name":"assigment",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"99 - for researched"
                                   },
                               "3":
                                  {"name":"skill_hours",
                                   "enum":"False",
                                   "size":4,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "4":
                                  {"name":"researched",
                                   "enum":"False",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   }
                     }
           },
       "200":{
                    "name": "manufacturing",
                    "struc_count": 100,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"No Comment",
					"struc_member":"6",
					"struc":{
					         "0":
                                  {"name":"base_number",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "1":
                                  {"name":"progect_num",
                                   "enum":"False",
                                   "size":1,
                                   "sign":"False",
                                   "comment":"Assigned Project"
                                   },
                               "2":
                                  {"name":"item_name",
                                   "enum":"manufacturing_item",
                                   "size":2,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "3":
                                  {"name":"total_number",
                                   "enum":"False",
                                   "size":4,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "4":
                                  {"name":"completed_item_num",
                                   "enum":"False",
                                   "size":4,
                                   "sign":"False",
                                   "comment":"Not used"
                                   },
                               "5":
                                  {"name":"current_skill_hour",
                                   "enum":"False",
                                   "size":4,
                                   "sign":"False",
                                   "comment":"Not used"
                                   }
                    }
           },
       "200":{
                    "name": "Help_counter_unused",
					"size": 2,
                    "type": "simple",
                    "enum":"False",
					"sign":"False",
					"comment":"Help_not used in game"
           },
       "98":{
             "name": "veh_park",
                    "struc_count": 27,
                    "type": "struc",
					"sign":"False",
					"enum":"Organizations",
					"enum_type":"False",
					"comment":"No Comment",
					"struc_member":"34",
					"struc":{
                           "0":
                                 {"name":"Alien Probe",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"1":
                                 {"name":"Alien Scout",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "2":
                                 {"name":"Alien Transporter",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "3":
                                 {"name":"Alien Fast Attack Ship",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "4":
                                 {"name":"Alien Destroyer",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"5":
                                 {"name":"Alien Assault Ship",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"6":
                                 {"name":"Alien Bomber",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"7":
                                 {"name":"Alien Escort",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"8":
                                 {"name":"Alien Battleship",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"9":
                                 {"name":"Alien Mothership",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "10":
                                 {"name":"Police Hovercar",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"11":
                                 {"name":"Airtaxi",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"12":
                                 {"name":"Rescue Transport",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"13":
                                 {"name":"Construction Vehicle",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"14":
                                 {"name":"Airtrans",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"15":
                                 {"name":"Space Liner",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"16":
                                 {"name":"Phoenix Hovercar",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"17":
                                 {"name":"Hoverbike",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"18":
                                 {"name":"Valkyrie Interceptor",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"19":
                                 {"name":"Hawk Air Warrior",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"20":
                                 {"name":"Dimension Probe",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"21":
                                 {"name":"Biotrans",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"22":
                                 {"name":"Explorer",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"23":
                                 {"name":"Retaliator",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"24":
                                 {"name":"Annihilator",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"25":
                                 {"name":"Autotaxi",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"26":
                                 {"name":"Autotrans",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"27":
                                 {"name":"Police Car",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"28":
                                 {"name":"Civilian Car",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"29":
                                 {"name":"Stormdog",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"30":
                                 {"name":"Wolfhound APC",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"31":
                                 {"name":"Blazer Turbo Bike",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
							"32":
                                 {"name":"Griffon AFV",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
						    "33":
                                 {"name":"Overspawn",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  }
                      }
           },
       "99":{
                    "name": "veh_land_index",
					"size": 2,
                    "type": "simple",
                    "enum":"False",
					"sign":"False",
					"comment":"No comment"
           },
       "100":{
             "name": "veh_land_struct",
                    "struc_count": 64,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"No Comment",
					"struc_member":"4",
					"struc":{
                           "0":
                                 {"name":"veh_num",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "1":
                                 {"name":"base",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "2":
                                 {"name":"direction",
                                  "enum":"pod_direction",
                                  "enum_num":3,
                                  "size":2,
                                  "sign":"True",
                                  "comment":"none"
                                  },
                           "3":
                                 {"name":"z_level",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  }
                      }
           },
       "101":{
                    "name": "dword_D4D0C_not_used",
					"size": 4,
                    "type": "simple",
                    "enum":"False",
					"sign":"False",
					"comment":"Not used"
           },
       "102":{
                    "name": "selected_base",
					"size": 2,
                    "type": "simple",
                    "enum":"False",
					"sign":"False",
					"comment":"No Comment"
           },
       "103":{
                    "name": "base_count",
					"size": 2,
                    "type": "simple",
                    "enum":"False",
					"sign":"False",
					"comment":"No Comment"
           },
       "104":{
                    "name": "camera_coord_8",
					"size": 2,
                    "type": "simple",
                    "enum":"False",
					"sign":"False",
					"comment":"No Comment"
           },
       "105":{
                    "name": "not_used_6_0",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
           },
       "106":{
                    "name": "bld_for_attack",
                    "struc_count": 1,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"building Selected Aliens for Attack",
					"struc_member":"10",
					"struc":{
                           "0":
                                 {"name":"building 1",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "1":
                                 {"name":"building 2",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "2":
                                 {"name":"building 3",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "3":
                                 {"name":"building 4",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "4":
                                 {"name":"building 5",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "5":
                                 {"name":"building 6",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "6":
                                 {"name":"building 7",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "7":
                                 {"name":"building 8",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "8":
                                 {"name":"building 9",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  },
                           "9":
                                 {"name":"building 10",
                                  "enum":"False",
                                  "size":2,
                                  "sign":"False",
                                  "comment":"none"
                                  }
                      }
           },
       "107":{
                    "name": "log_count",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"show only visible messages count"
           },
       "108":{
                    "name": "num_veh_for_next_gen",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
           },
       "109":{
                    "name": "unused1",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"Not used"
           },
       "110":{
                    "name": "veh_market",
                    "struc_count": 34,
                    "type": "struc",
					"sign":"False",
					"enum":"craft",
					"enum_type":"False",
					"comment":"no comment",
					"struc_member":7,
					"struc":{
                             "0":
                                 {"name":"available_from_week",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "1":
                                 {"name":"base_price",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "2":
                                 {"name":"min_stock_increase",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "3":
                                 {"name":"max_stock_increase",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "4":
                                 {"name":"current_price",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "5":
                                 {"name":"current_amount",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "6":
                                 {"name":"last_week_amount",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  }

                             }

           },
       "111":{
                    "name": "craft_equip_economic",
                    "struc_count": 49,
                    "type": "struc",
					"sign":"False",
					"enum":"craft_equip",
					"enum_type":"False",
					"comment":"no comment",
					"struc_member":7,
					"struc":{
                             "0":
                                 {"name":"available_from_week",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "1":
                                 {"name":"base_price",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "2":
                                 {"name":"min_stock_increase",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "3":
                                 {"name":"max_stock_increase",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "4":
                                 {"name":"current_price",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "5":
                                 {"name":"current_amount",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "6":
                                 {"name":"last_week_amount",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  }

                             }

           },
       "112":{
                    "name": "amo_economic",
                    "struc_count": 44,
                    "type": "struc",
					"sign":"False",
					"enum":"ammo",
					"enum_type":"False",
					"comment":"no comment",
					"struc_member":7,
					"struc":{
                             "0":
                                 {"name":"available_from_week",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "1":
                                 {"name":"base_price",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "2":
                                 {"name":"min_stock_increase",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "3":
                                 {"name":"max_stock_increase",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "4":
                                 {"name":"current_price",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "5":
                                 {"name":"current_amount",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "6":
                                 {"name":"last_week_amount",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  }

                             }

           },
       "113":{
                    "name": "alignment",
					"size": 15,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"Empty"
           },
       "114":{
                    "name": "agent_eqv_economic",
                    "struc_count": 87,
                    "type": "struc",
					"sign":"False",
					"enum":"agent_equipment",
					"enum_type":"False",
					"comment":"no comment",
					"struc_member":7,
					"struc":{
                             "0":
                                 {"name":"available_from_week",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "1":
                                 {"name":"base_price",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "2":
                                 {"name":"min_stock_increase",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "3":
                                 {"name":"max_stock_increase",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "4":
                                 {"name":"current_price",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "5":
                                 {"name":"current_amount",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "6":
                                 {"name":"last_week_amount",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  }

                             }

           },
       "115":{
                    "name": "colapse_tile",
                    "struc_count": 50,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"no comment",
					"struc_member":4,
					"struc":{
                             "0":
                                 {"name":"col_flag",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "1":
                                 {"name":"x_value",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "2":
                                 {"name":"y_value",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "3":
                                 {"name":"z_value",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  }
                       }
           },
       "116":{
                    "name": "paedia_res_index",
                    "struc_count": 281,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"no comment",
					"struc_member":1,
					"struc":{
                             "0":
                                 {"name":"entry",
                                  "size":1,
                                  "enum":"research_flag",
                                  "sign":"False",
                                  "comment":"none"
                                  }
                             }

        },
       "117":{
                    "name": "empty",
					"size": 15,
					"type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"15 byte shift"

			 },
       "118":{
                    "name": "spotted_alien_bld",
                    "struc_count": 110,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"no comment",
					"struc_member":5,
					"struc":{
                             "0":
                                 {"name":"type_occurrences",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"2 - spotted"
                                  },
                             "1":
                                 {"name":"unit_1",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "2":
                                 {"name":"entry",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "3":
                                 {"name":"entry",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  },
                             "4":
                                 {"name":"entry",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"none"
                                  }
                             }
            },
       "119":{      "name": "junctions_count",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
           },
       "120":{
                    "name": "score",
                    "struc_count": 16,
                    "type": "struc",
					"sign":"False",
					"enum":"score",
					"enum_type":"False",
					"comment":"no comment",
					"struc_member":1,
					"struc":{
                             "0":
                                 {"name":"value",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"True",
                                  "comment":"No Comment"
                                  }
                              }
           },
       "121":{      "name": "diff_enum",
					"size": 2,
                    "type": "simple",
					"enum":"difficulty_level",
					"enum_num":5,
					"sign":"False",
					"comment":"No Comment"
			},

       "122":{
                    "name": "UFO_Incursions_num",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
           },
       "123":{
                    "name": "calc_fund_flag",
					"size": 2,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
           },
       "124":{
                    "name": "agent_equip_artefacts",
                    "struc_count": 87,
                    "type": "struc",
					"sign":"False",
					"enum":"agent_equipment",
					"enum_type":"False",
					"comment":"no comment",
					"struc_member":1,
					"struc":{
                             "0":
                                 {"name":"flag",
                                  "size":1,
                                  "enum":"agent_equip_art",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  }
                             }
           },
       "125":{
                    "name": "equip_item_score_level",
                    "struc_count": 9,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"no comment",
					"struc_member":1,
					"struc":{
                             "0":
                                 {"name":"flag",
                                  "size":1,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  }
                             }
           },
       "126":{
                    "name": "Agent_unused",
                    "struc_count": 180,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"no comment",
					"struc_member":1,
					"struc":{
                             "0":
                                 {"name":"flag",
                                  "size":1,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  }
                             }
           },
       "127":{
                    "name": "week_count",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
           },
       "128":{
                    "name": "Alien_Infiltration",
                    "struc_count": 27,
                    "type": "struc",
					"sign":"False",
					"enum":"Organizations",
					"enum_type":"False",
					"comment":"no comment",
					"struc_member":56,
					"struc":{
                             "0":
                                 {"name":"day_1",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "1":
                                 {"name":"day_2",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "2":
                                 {"name":"day_3",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "3":
                                 {"name":"day_4",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "4":
                                 {"name":"day_5",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "5":
                                 {"name":"day_6",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "6":
                                 {"name":"day_7",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "7":
                                 {"name":"day_8",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "8":
                                 {"name":"day_9",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "9":
                                 {"name":"day_10",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "10":
                                 {"name":"day_11",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "11":
                                 {"name":"day_12",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "12":
                                 {"name":"day_13",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "13":
                                 {"name":"day_14",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "14":
                                 {"name":"day_15",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "15":
                                 {"name":"day_16",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "16":
                                 {"name":"day_17",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "17":
                                 {"name":"day_18",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "18":
                                 {"name":"day_19",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "19":
                                 {"name":"day_20",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "20":
                                 {"name":"day_21",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "21":
                                 {"name":"day_22",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "22":
                                 {"name":"day_23",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "23":
                                 {"name":"day_24",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "24":
                                 {"name":"day_25",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "25":
                                 {"name":"day_26",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "26":
                                 {"name":"day_27",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "27":
                                 {"name":"day_28",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "28":
                                 {"name":"day_29",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "29":
                                 {"name":"day_30",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "30":
                                 {"name":"day_31",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "31":
                                 {"name":"day_32",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "32":
                                 {"name":"day_33",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "33":
                                 {"name":"day_34",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "34":
                                 {"name":"day_35",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "35":
                                 {"name":"day_36",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "36":
                                 {"name":"day_37",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "37":
                                 {"name":"day_38",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "38":
                                 {"name":"day_39",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "39":
                                 {"name":"day_40",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "40":
                                 {"name":"day_41",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "41":
                                 {"name":"day_42",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "42":
                                 {"name":"day_43",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "43":
                                 {"name":"day_44",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "44":
                                 {"name":"day_45",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "45":
                                 {"name":"day_46",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "46":
                                 {"name":"day_47",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "47":
                                 {"name":"day_48",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "48":
                                 {"name":"day_49",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "49":
                                 {"name":"day_50",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "50":
                                 {"name":"day_51",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "51":
                                 {"name":"day_52",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "52":
                                 {"name":"day_53",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "53":
                                 {"name":"day_54",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "54":
                                 {"name":"day_55",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "55":
                                 {"name":"day_56",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  }
                             }
           },
       "129":{
                    "name": "unuse_counter",
                    "struc_count": 10,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"no comment",
					"struc_member":1,
					"struc":{
                             "0":
                                 {"name":"value",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  }
                             }
           },
       "130":{
                    "name": "control_chamber_destroy_flag",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"1-destroy,0-not"
           },
       "131":{
                    "name": "not_used_5",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"No Comment"
           },
       "132":{
                    "name": "UFO_in_AD",
                    "struc_count": 10,
                    "type": "struc",
					"sign":"False",
					"enum":"craft",
					"enum_type":"False",
					"comment":"no comment",
					"struc_member":1,
					"struc":{
                             "0":
                                 {"name":"count",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  }
                             }
           },
       "133":{
                    "name": "veh_equip_artefacts",
                    "struc_count": 49,
                    "type": "struc",
					"sign":"False",
					"enum":"craft_equip",
					"enum_type":"False",
					"comment":"no comment",
					"struc_member":1,
					"struc":{
                             "0":
                                 {"name":"flag",
                                  "size":1,
                                  "enum":"agent_equip_art",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  }
                             }
           },
       "134":{
                    "name": "xcom_veh_park",
                    "struc_count": 34,
                    "type": "struc",
					"sign":"False",
					"enum":"craft",
					"enum_type":"False",
					"comment":"no comment",
					"struc_member":1,
					"struc":{
                             "0":
                                 {"name":"count",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  }
                             }
           },
       "135":{
                    "name": "org_raid_timer",
					"size": 4,
                    "type": "simple",
					"enum":"False",
					"sign":"False",
					"comment":"org_raid_timer = 80 - 2 * diff_enum, calc in day"
           },
       "136":{
                    "name": "organized_crime",
                    "struc_count": 10,
                    "type": "struc",
					"sign":"False",
					"enum":"Organizations",
					"enum_type":"0",
					"comment":"no comment",
					"struc_member":4,
					"struc":{
                             "0":
                                 {"name":"organization",
                                  "size":2,
                                  "enum":"Organizations",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "1":
                                 {"name":"action_type",
                                  "size":2,
                                  "enum":"action_raid",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "2":
                                 {"name":"target_building",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "3":
                                 {"name":"time",
                                  "size":2,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  }
                             }
           },
       "137":{
                    "name": "agent_in_facility",
                    "struc_count": 16,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"no comment",
					"struc_member":36,
					"struc":{
                             "0":
                                 {"name":"Access Lift",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "1":
                                 {"name":"agents in AL",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "2":
                                 {"name":"Living Quarters",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "3":
                                 {"name":"agents in LQ",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "4":
                                 {"name":"Stores",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "5":
                                 {"name":"agent in Stores",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "6":
                                 {"name":"Cells",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "7":
                                 {"name":"agent in Cells",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "8":
                                 {"name":"medical_bay_count",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "9":
                                 {"name":"wounded_agents",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "10":
                                 {"name":"trainning_aria_count",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "11":
                                 {"name":"trainning_agents",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "12":
                                 {"name":"psi_gum_count",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "13":
                                 {"name":"psi_training_agents",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "14":
                                 {"name":"Security Station",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "15":
                                 {"name":"agents in SS",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "16":
                                 {"name":"Adv Security Station",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "17":
                                 {"name":"agents in ASS",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "18":
                                 {"name":"Vehicle Repair Bay",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "19":
                                 {"name":"agents in VRB",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "20":
                                 {"name":"Biochemistry Lab",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "21":
                                 {"name":"agents in BL",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "22":
                                 {"name":"Adv Biochemistry Lab",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "23":
                                 {"name":"agents in ABL",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "24":
                                 {"name":"Quantum Physics Lab",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "25":
                                 {"name":"agents in QPL",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "26":
                                 {"name":"Adv Quantum Physics Lab",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "27":
                                 {"name":"agents in AQPL",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "28":
                                 {"name":"Alien Containment",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "29":
                                 {"name":"agents in AC",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "30":
                                 {"name":"Adv Alien Containment",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "31":
                                 {"name":"agents in AAC",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "32":
                                 {"name":"Workshop",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "33":
                                 {"name":"agents in Workshop",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "34":
                                 {"name":"Adv Workshop",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "35":
                                 {"name":"agents in AW",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  }
                             }
       },

       "138":{
                    "name": "agent_recovery",
                    "struc_count": 180,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"no comment",
					"struc_member":3,
					"struc":{
                             "0":
                                 {"name":"medical",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "1":
                                 {"name":"trainning",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "2":
                                 {"name":"psi",
                                  "size":4,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  }
                             }
                      },
       "139":{
                    "name": "rel_tab",
					"size": 4,
                    "type": "simple",
					"enum":"rel_tab",
					"enum_num":6,
					"sign":"False",
					"comment":"No Comment"
           },
       "140":{
                    "name": "org_infiltr_on_graf",
                    "struc_count": 1,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"no comment",
					"struc_member":10,
					"struc":{
                             "0":
                                 {"name":"org1",
                                  "size":1,
                                  "enum":"Organizations",
                                  "sign":"True",
                                  "comment":"No Comment"
                                  },
                             "1":
                                 {"name":"org2",
                                  "size":1,
                                  "enum":"Organizations",
                                  "sign":"True",
                                  "comment":"No Comment"
                                  },
                             "2":
                                 {"name":"org3",
                                  "size":1,
                                  "enum":"Organizations",
                                  "sign":"True",
                                  "comment":"No Comment"
                                  },
                             "3":
                                 {"name":"org4",
                                  "size":1,
                                  "enum":"Organizations",
                                  "sign":"True",
                                  "comment":"No Comment"
                                  },
                             "4":
                                 {"name":"org5",
                                  "size":1,
                                  "enum":"Organizations",
                                  "sign":"True",
                                  "comment":"No Comment"
                                  },
                             "5":
                                 {"name":"org6",
                                  "size":1,
                                  "enum":"Organizations",
                                  "sign":"True",
                                  "comment":"No Comment"
                                  },
                             "6":
                                 {"name":"org7",
                                  "size":1,
                                  "enum":"Organizations",
                                  "sign":"True",
                                  "comment":"No Comment"
                                  },
                             "7":
                                 {"name":"org8",
                                  "size":1,
                                  "enum":"Organizations",
                                  "sign":"True",
                                  "comment":"No Comment"
                                  },
                             "8":
                                 {"name":"org9",
                                  "size":1,
                                  "enum":"Organizations",
                                  "sign":"True",
                                  "comment":"No Comment"
                                  },
                             "9":
                                 {"name":"org10",
                                  "size":1,
                                  "enum":"Organizations",
                                  "sign":"True",
                                  "comment":"No Comment"
                                  }
                             }
                      },

       "141":{
                    "name": "infilt_graf_color",
                    "struc_count": 1,
                    "type": "struc",
					"sign":"False",
					"enum":"False",
					"enum_type":"False",
					"comment":"no comment",
					"struc_member":10,
					"struc":{
                             "0":
                                 {"name":"org1",
                                  "size":1,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "1":
                                 {"name":"org2",
                                  "size":1,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "2":
                                 {"name":"org3",
                                  "size":1,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "3":
                                 {"name":"org4",
                                  "size":1,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "4":
                                 {"name":"org5",
                                  "size":1,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "5":
                                 {"name":"org6",
                                  "size":1,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "6":
                                 {"name":"org7",
                                  "size":1,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "7":
                                 {"name":"org8",
                                  "size":1,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "8":
                                 {"name":"org9",
                                  "size":1,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  },
                             "9":
                                 {"name":"org10",
                                  "size":1,
                                  "enum":"False",
                                  "sign":"False",
                                  "comment":"No Comment"
                                  }
                      }
           }

}