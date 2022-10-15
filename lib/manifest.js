import { getAge } from './helpers.js'

export const manifest = {
  questions: [
    {
      header: 'Basic Details',
      items: [
        {
          key: 'Name',
          label: 'Full Name',
          type: 'string',
          optional: false
        },
        {
          key: 'Email',
          label: 'Contact Email',
          type: 'string',
          inputType: 'email',
          sublabel: `We'll be in touch using this email, so make sure you check it regularly.`,
          optional: false
        },
        {
          key: 'Pronouns',
          label: 'Your Pronouns',
          type: 'string',
          optional: false
        },
        {
          key: 'Grade',
          label: 'Grade',
          sublabel: `All highschoolers are welcome! Middle schoolers are accepted on a case by case basis. If you're unsure, please contact us.`,
          type: 'select',
          options: ['8', '9', '10', '11', '12'],
          optional: false
        },
        {
          key: 'School',
          label: 'School',
          sublabel: `Students outside of Poolesville High School are welcome as well!`,
          type: 'string',

          optional: false
        },
        {
          key: 'T-Shirt Size',
          label: 'T-Shirt Size',
          type: 'select',
          sublabel: `We'll be having awesome swag, so you won't want to miss out.`,
          options: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
          optional: false
        },
        {
          key: 'Technical Skill Level',
          label: 'How would you describe your technical skills?',
          sublabel: `Everyone's welcome! This question is just to help us gauge what resources we need to support attendees.`,
          type: 'select',
          options: [
            'First-timer: Have never coded before!',
            'Beginner: Just started learning!',
            'Intermediate: Have taken CS classes OR worked on small individual projects!',
            "Advanced: I'm comfortable with my skill and can work without much external guidance!"
          ],
          optional: false
        },
        {
          key: 'Dietary Restrictions',
          label: 'Do you have any dietary restrictions? Please list them here.',
          type: 'paragraph',
          optional: true
        },
        {
          key: 'Any concerns?',
          label: 'Any other concerns?',
          type: 'paragraph',
          optional: true
        }
      ]
    },
    {
      header: 'Workshops',
      label: `At poolesville_hacks, attendees will have an opportunity to host their own informal workshops! You bring a passion and we'll provide a room with participants. These questions are not a commitment! You can choose to change your topic or not present at any time.`,
      items: [
        {
          key: 'Would you be interested in hosting a workshop session at poolesville_hacks?',
          label: 'Would you be interested in hosting a session?',
          type: 'select',
          options: ['Yes, for sure!', `No, it's alright.`],
          optional: false
        },
        {
          key: 'Workshop Topic',
          label: 'Awesome! What do you think you would like to talk about?',
          type: 'paragraph',
          optional: false,
          check: data =>
            data[
              'Would you be interested in hosting a workshop session at poolesville_hacks?'
            ] == `No, it's alright.` ||
            data[
              'Would you be interested in hosting a workshop session at poolesville_hacks?'
            ] === undefined
        }
      ]
    },
    {
      header: "Now, let's have some fun",
      items: [
        {
          key: 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?',
          label:
            'How much wood would a woodchuck chuck if a woodchuck could chuck wood?',
          type: 'string',
          optional: true
        },
        {
          key: "What's your favorite place to code at?",
          label: "What's your favorite place to code at?",
          type: 'string',
          optional: true
        }
      ]
    }
    /*{
      header: 'Travel Stipends',
      label: `We're offering a limited number of stipends to cover a portion of travel expenses for those who need it to be able to make the event. Unfortunately, we can't guarantee a travel stipend.

      We plan to provide up to $500 to domestic (within North America) participants and $750 to international participants.`,
      items: [
        {
          key: 'Travel Stipend',
          label: 'Do you need a travel stipend?',
          type: 'select',
          options: ['Yes, please!', 'No, thanks.'],
          optional: false
        },
        {
          key: 'Your Nearest Airport',
          label: 'What is your nearest airport?',
          type: 'string',
          sublabel: <>3 letter IATA codes are appreciated: <a target="_blank" href="https://www.world-airport-codes.com">world-airport-codes.com</a>.</>,
          optional: false,
          check: data =>
            data['Travel Stipend'] == 'No, thanks.' ||
            data['Travel Stipend'] === undefined
        },
        {
          key: 'At the moment, what is your estimated travel cost?',
          label: 'At the moment, what is your estimated travel cost? ($USD)',
          sublabel: `Don't sweat this too much, this is just an indication, not a commitment!`,
          check: data =>
            data['Travel Stipend'] == 'No, thanks.' ||
            data['Travel Stipend'] === undefined,
          type: 'string'
        },
        {
          key: `What would a travel stipend mean to you?`,
          label: `What would a travel stipend mean to you?`,
          sublabel: `Use this field however you'd like! It can be a place to share a bit more context about you or why you're excited for Assemble.

          We're running on a limited budget, so every stipend means a lot to us and we hope it means a lot to you.`,
          type: 'paragraph',
          check: data =>
            data['Travel Stipend'] == 'No, thanks.' ||
            data['Travel Stipend'] === undefined
        },
        {
          key: `Do you require a letter for visa applications?`,
          label: `Do you require a letter for visa applications?`,
          sublabel: <>Please note that while we can provide a letter to support your visa applications, we are unable to guarantee that you can get a visa. Check out this site for more country specific information: <a target="_blank" href="https://ustraveldocs.com/">ustraveldocs.com</a>.
          <br /> <br />
          If you require further support, please email us at <a target="_blank" href="mailto:assemble@hackclub.com">assemble@hackclub.com</a>. We'll try our best!</>,
          type: 'select',
          options: ['Yes', 'No']
        }
      ]
    },*/
  ]
}

export default manifest

export const requiredList = (() => {
  const list = {}
  for (const section of manifest.questions) {
    section.items
      .filter(item => !item.optional)
      .forEach(item => {
        list[item.key] = item.check
          ? data => {
              console.log(item.key)
              console.log(!item.check(data) || data[item.key])
              console.log(!item.check(data))
              console.log(data[item.key])
              return item.check(data) || data[item.key]
            }
          : data => data[item.key]
      })
  }
  return list
})()
