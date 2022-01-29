import Mongoose from "mongoose";
const { Schema } = Mongoose;

const dataSchema = new Schema({
    illustration:{
        animated: {
          type: Boolean,
          require: true,
        },
    },
    greeting:{
        username:{
            type: String,
            require: true,
        },
        title:{
            type: String,
            require: true,
        },
        subTitle:{
            type: String,
            require: true,
        },
        resumeLink:{
            type: String,
            require: true,
        },
        displayGreeting: {
            type: Boolean,
            default: true,
        },
        
    },
    socialMediaLinks:{
        github:{
          type: String,
          require: true,
        },
        linkedin:{
          type: String,
          require: false,
        },
        gmail:{
          type: String,
          require: false,
        },
        gitlab:{
          type: String,
          require: false,
        },
        facebook:{
          type: String,
          require: false,
        },
        medium:{
          type: String,
          require: false,
        },
        stackoverflow:{
          type: String,
          require: false,
        },
         instagram:{
          type: String,
          require: false,
        },
        twitter:{
          type: String,
          require: false,
        },
        display:{
          type: Boolean,
          require: true,
        },
    },
    skillsSection:{
        title:{
            type: String,
            require: true,
        },
        subTitle:{
            type: String,
            require: true,
        },
        skills: [
            String
        ],
         softwareSkills: [
             {
            skillName: {
                type: String,
                require: true,
                },
            fontAwesomeClassname: {
                type: String,
                require: true,
                }
            },
         ],
         display: {
             type: Boolean,
             default: true
         }



    },

    educationInfo:{
        display: {
             type: Boolean,
             default: true
         },
         schools: [
            {
                schoolName:{
                type: String,
                require: true,
                },
                logo:{
                type: String,
                require: true,
                },
                subHeader:{
                type: String,
                require: true,
                },
                desc:{
                type: String,
                require: true,
                },
                descBullets:[
                {type: String,
                require: true,}
                ],
            }
         ]

    },
    techStack:{
        viewSkillBars:{
            
            type: String,
            require: true,
               
        },
        experience:[
            {
               Stack:{
                type: String,
                require: true,
               } ,
               progressPercentage:{
                   type: String,
                require: true,
               }
            }
        ],
        displayCodersrank:{
            type: Boolean,
            default: true
        }
    },
    workExperiences:{
        display:{
            type:Boolean,
            default: true
        },
        experience:[
            {
                role:{
                    type: String,
                    require: true,
                },
                company:{
                    type: String,
                    require: true,
                },
                companylogo:{
                    type: String,
                    require: true,
                },
                date:{
                    type: String,
                    require: true,
                },
                desc:{
                    type: String,
                    require: true,
                },
                descBullets:[

                   { type: String,
                    require: true,}
                ]
               
            }
        ]
    },
    openSource:{
       
        githubUserName:{
            type: String,
            require: true
        },
        showGithubProfile:{
            type: String,
            require: true
        },
        display:{
            type:Boolean,
            default: true
        },

    },
    bigProjects:{
        title:{
            type: String,
            require: true
        },
        subtitle:{
            type: String,
            require: true
        },
        projects:[
            {
                image:{
                    type: String,
                    require: true
                },
                projectName:{
                    type: String,
                    require: true
                },
                projectDesc:{
                    type: String,
                    require: true
                },
                footerLink:[
                    {
                        name:{
                            type: String,
                            require: true
                        },
                        url:{
                            type: String,
                            require: true
                        },


                    }
                ],
            }
        ],
        display:{
            type:Boolean,
            default: true
        },
    },
    achievementSection:{
         title:{
            type: String,
            require: true
        },
        display:{
            type:Boolean,
            default: false
        },
        subtitle:{
            type: String,
            require: true
        },
        achievementsCards:[
            {
                 title:{
                    type: String,
                    require: true
                },
                 subtitle:{
                    type: String,
                    require: true
                },
                 image:{
                    type: String,
                    require: true
                },
                footerLink:[
                    {
                       name:{
                            type: String,
                            require: true
                        },
                        url:{
                            type: String,
                            require: true
                        }, 
                    }
                ]
                
            }
        ]
    },
    blogSection:{
        title:{
            type: String,
            require: true
        },
        display:{
            type:Boolean,
            default: false
        },
        subtitle:{
            type: String,
            require: true
        },
        blogs:[
            {
                url:{
                    type: String,
                    require: true
                },
                title:{
                    type: String,
                    require: true
                },
                description:{
                    type: String,
                    require: true
                },
            }
        ]
    },
    talkSection:{
        title:{
            type: String,
            require: true
        },
        display:{
            type:Boolean,
            default: false
        },
        subtitle:{
            type: String,
            require: true
        },
        talks:[
            {
             title:{
                type: String,
                require: true
                },
            subtitle:{
                type: String,
                require: true
                },
             slides_url:{
                type: String,
                require: true
                },
            event_url:{
                type: String,
                require: true
                },
            }
        ]
    },
    podcastSection :{
        title:{
            type: String,
            require: true
        },
        display:{
            type:Boolean,
            default: false
        },
        subtitle:{
            type: String,
            require: true
        },
        podcast: [
            {
                type:String,
            
            }
        ],
    },
    contactInfo:{
        title:{
            type: String,
            require: true
        },
        
        subtitle:{
            type: String,
            require: true
        },
        number:{
            type: String,
            require: true
        },
        
        email_address:{
            type: String,
            require: true
        },
    },
    twitterDetails:{
        userName:{
            type: String,
            require: true
        },
        
        display:{
            type: Boolean,
            default: true
        },
        
    },





},{
    timestamps: true
})


const Data = Mongoose.model("Data", dataSchema);

export default Data;