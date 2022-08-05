import React, { Component } from 'react'

export default class MedDetail extends Component {
  constructor(){
    super();
    this.state={
      medtags:["Fever","Pain",'Musculoskeletal pain','Headaches','Dental']
    }
  }
  render() {
    return (
      <div>
          <div className="row">
              <h1 className='text-center mt-5'>Panadol</h1>
              <div className='p-5'>
                  <h3>About</h3>
                  <div>
              Paracetamol, also known as acetaminophen,[a] is a medication used to treat fever and mild to moderate pain. At a standard dose, paracetamol only slightly decreases body temperature;it is inferior to ibuprofen in that respect,[15] and the benefits of its use for fever are unclear. Paracetamol may relieve pain in acute mild migraine but only slightly in episodic tension headache. However, the aspirin/paracetamol/caffeine combination helps with both conditions where the pain is mild and is recommended as a first-line treatment for them.[20][21] Paracetamol is effective for post-surgical pain, but it is inferior to ibuprofen.[22] The paracetamol/ibuprofen combination provides further increase in potency and is superior to either drug alone.[22][23] The pain relief paracetamol provides in osteoarthritis is small and clinically insignificant.[12][24][25] The evidence in its favor for the use in low back pain, cancer pain and neuropathic pain is insufficient.
             </div>
              </div>
              <div className="px-5">
                  <h3>Medical uses</h3>
                {this.state.medtags.map(item=>(
                  <button className='btn btn-success btn-sm mx-2'>{item}</button>
                ))}
              </div>
              <div className="p-5 ">
                  <h3>Medicine History</h3>
                  <div>
                  Paracetamol was first made in 1877 or possibly 1852.[47][48][49] It is the most commonly used medication for pain and fever in both the United States and Europe.[50] It is on the World Health Organization's List of Essential Medicines.[51] Paracetamol is available as a generic medication, with brand names including Tylenol and Panadol among others.[52] In 2019, it was the 145th most commonly prescribed medication in the United States, with more than 4 million prescriptions.[53][54]
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
