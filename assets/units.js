const units = [
  {
    name: '--No course selected--',
    cost: '',
    duration: '',
    code: '',
    summaryDescription: '',
    courseAim: '',
    knowledgeAims: [],
    skillAims: [],
    hours: '',
    imageUrl: '/',
  },
  {
    name: 'Work Safely at Heights',
    cost: '290',
    duration: '1 day',
    code: 'RIIWHS204E',
    codes: ['RIIWHS204E Work safely at heights'],
    prerequisites: [
      'No prerequisite is required for the completion of this course.',
    ],
    summaryDescription: `This course covers workers who work at heights and are required to attain the level of Height Safety Operator.`,
    courseAim:
      'Students undertake theoretical and practical learning. Participants perform various height safety practical exercises to ensure they can use height safety equipment correctly, following Australian standards and manufacturer instructions and recommendations.',
    knowledgeAims: [
      'Identification and assessment of hazards.',
      'Legislation.',
      'Anchorage connectors and tie-off adapters.',
      'How to select, inspect, don and properly fit a harness.',
      'Fall clearances and forces in falls.',
      'How to select, perform pre-use checks and operate fall protection equipment.',
      'Lanyards and self-retracting lifelines.',
      'Dropped object prevention.',
      'Record keeping.',
    ],
    skillAims: [
      'Complete a Safe Work Method Statement (SWMS).',
      'Set up an exclusion zone.',
      'Access and install equipment, including ladder access.',
      'Pre-use inspection of fall arrest equipment.',
      'Select and correctly fit a harness and perform buddy checks.',
      'Correct rigging of anchorage straps.',
      'Correct use of a restraint line and running redirections.',
      'Set up a shock-absorbing lanyard and connect to anchorage and workers harnesses.',
      'Twin tail lanyard mobility and pole-strap work positioning techniques.',
      'Correctly demonstrate the use of an industrial rescue kit.',
      'Clean up a work area.',
    ],
    courseAssessment: [
      'Hazard identification discussion and the completion of an SWMS documentation.',
      'Selection, pre-use inspection, putting on and correctly fitting a full body harness and height safety techniques to work safely at heights following Australian standards and manufacturer instructions and recommendations.',
    ],
    hours: '8 hours',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657133829/Cairns%20Height%20Safety/chs_img_42_pfyeq7.jpg',
  },
  {
    name: 'Tower Rescue – Advanced Operator',
    cost: '680',
    duration: '2 days',
    code: 'PUASAR022',
    codes: ['PUASAR022 Participate in a rescue operation'],
    prerequisites: [
      'HLTAID003 Provide first aid',
      '3M Australia recommends that all students hold a Nationally Recognised Statement of Attainment in RIIWHS204D Work safely at heights or equivalent units',
    ],
    summaryDescription:
      'This course provides candidates with the necessary skills and knowledge to perform vertical rope rescue techniques from towers, masts and structures using technical rope rescue equipment.',
    courseAim:
      'Candidates learn several rescue techniques, including self-rescue. These techniques equip students to deal with possible emergencies that may arise due to the varying workplaces that tower workers may face in everyday working environments.',
    knowledgeAims: [
      'Identification and assessment of hazards',
      'Select harness, pre-use inspection, don and properly fit the harness',
      'Select fall protection equipment, pre-use checks and operation',
      'Select appropriate rescue equipment, pre-use checks and operation',
      'Rescue team roles are appropriately selected',
      'Communication is maintained and clear throughout rescue exercises',
      'Establish and monitor anchors',
      'Assess and monitor the casualty',
      'Archer systems checks',
      'Carry out isolation procedures',
      'Involvement of external emergency services',
      'Record keeping',
    ],
    skillAims: [
      'Complete a safe work method statement (SWMS)',
      'Set up an exclusion zone',
      'Placement of rescue equipment',
      'Controlling hazards to rescuer, victim and others',
      'Removing victim to safe location / place of safety',
      'Pre-use inspection off all arrest equipment',
      'Select harness; properly fit the harness and perform buddy checks',
      'Maintain safe approach distances (SAD’s)',
      'Correct rigging of anchorage straps',
      'Correct restraint techniques',
      'Correctly use an industrial rescue kit',
      'Clean-up work area',
    ],
    courseAssessment: [
      'Hazard identification discussion and the completion of a SWMS documentation',
      'Select, pre-use inspect, put on and correctly fit a full body harness, and perform pole tope rescue techniques in order to retrieve a workmate who is suspended or injured on a pole top and needs assistance to get down to a safe area',
    ],
    hours: '16 hours',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657132247/Cairns%20Height%20Safety/chs_img_33_tlfgxz.jpg',
  },
  {
    name: 'Undertake Vertical Rescue',
    cost: '1,420',
    duration: '5 days',
    code: 'PUASAR032A',
    summaryDescription:
      'This unit covers the competency required to undertake vertical rescue in a range of emergency situations in natural and man-made environments.',
    hours: '40 hours',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657591396/Cairns%20Height%20Safety/IMG_2291_emo91t.jpg',
  },
  {
    name: 'Post Fall Recovery',
    cost: '360',
    duration: '1 day',
    code: 'PUASAR022',
    summaryDescription:
      'This course covers workers who work at heights in industrial sectors and are required to perform a rescue of a workmate from an industrial structure using a pre-engineered rescue kit.',
    hours: '8 hours',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657133830/Cairns%20Height%20Safety/chs_img_46_moygx5.jpg',
  },
  {
    name: 'Height Safety Supervisor',
    cost: '680',
    duration: '3 days',
    code: 'Multiple Units',
    summaryDescription:
      'This course covers inspecting products, keeping records and providing feedback on the product’s conformance to the relevant specifications.',
    hours: '24 hours',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657133830/Cairns%20Height%20Safety/chs_img_44_roaohp.jpg',
  },
  {
    name: 'Height Safety Equipment Inspector',
    cost: '360',
    duration: '1 day',
    code: 'MEM15004',
    summaryDescription:
      'This course covers inspecting products, keeping records and providing feedback on the conformance of product to specifications.',
    hours: '4 hours',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657763678/Cairns%20Height%20Safety/safety_equipment_inspector_dztmwj.jpg',
  },
  {
    name: 'Poletop Rescue',
    cost: '320',
    duration: '1 day',
    code: 'UETTDRRF02',
    summaryDescription:
      'This course provides students with the necessary skills and knowledge to perform rescue techniques from a pole top using pre-engineered rescue kits.',
    hours: '8 hours',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657763472/Cairns%20Height%20Safety/pole_rescue_ruraia.jpg',
  },
]

export default units
