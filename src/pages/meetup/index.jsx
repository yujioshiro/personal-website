import React from 'react';
import Layout from '../../components/Layout';

export default function ProjectsPage() {
  return (
    <Layout>
        <h1><strong>Irvine Code & Coffee</strong></h1>
        <div class="">
          <article>
            <h2>Next meetup: September 27th, 6pm</h2>
            <p>This is a casual meetup for developers and people working with/in software. Despite the name, you do not have to code at these meetups; we like to talk, meet new friends, and make new connections.</p>
            <p>Some info:</p>
            <ul>
              <li>we meet every other Wednesday at 6pm</li>
              <li>@ The Lost Bean, 4632 Barranca Pkwy, Irvine (in the Woodbridge Village Center)</li>
              <li>we are part of Learn Teach Code LA, you can RSVP to the event <a href="https://www.meetup.com/learnteachcode/events/296259595/" target='_blank'>here</a>!</li>
              <li>the quickest way to get your question answered is in the #irvine channel in the <a href="https://discord.gg/TnqPC9mFSf" target='_blank'>LTC Discord Server</a>. If you don't have discord, feel free to message me on <a href="https://www.linkedin.com/in/yujioshiro/" target='_blank'>LinkedIn</a></li>
              {/* <li>No, you do not have to be a working developer to join us. This meetup is open to engineers, salespersons, owners, students, and anyone generally interested in tech and software</li> */}
            </ul>
            <p>and <strong>NO</strong>, you do not have to be an engineer to come. Whether you're in design, HR, sales, or just learning, anyone with an interest in tech and software is welcome to join us!</p>
            {/* <footer>This meetup is run under Learn Teach Code LA</footer> */}
          </article>
    </div>
    </Layout>
  )
}