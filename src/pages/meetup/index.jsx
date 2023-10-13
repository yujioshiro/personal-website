import React from 'react';
import Layout from '../../components/Layout';

export default function ProjectsPage() {
  return (
    <Layout>
        <h1><strong>Irvine Code & Coffee</strong></h1>
        <div class="">
          <article>
            <h2>Next meetup: October 25th, 6pm</h2>
            <p>This is a casual meetup for developers and people working with/in software. Despite the name, we don't really code at these meetups; we like to talk, meet new friends, and make new connections.</p>
            <ul>
              <li>meet every other Wednesday at 6pm</li>
              <li>@ The Lost Bean, 4632 Barranca Pkwy, Irvine (in the Woodbridge Village Center)</li>
              <li>we are part of Learn Teach Code LA, you can RSVP to the event <a href="https://www.meetup.com/learnteachcode/events/296573385/" target='_blank'>here</a>!</li>
              <li>for any questions:
                <ul>
                  <li>#irvine channel in the <a href="https://discord.gg/TnqPC9mFSf" target='_blank'>LTC Discord Server</a></li>
                  <li>message me on <a href="https://www.linkedin.com/in/yujioshiro/" target='_blank'>LinkedIn</a></li>
                  <li>use my <a href="https://yujioshiro.com/contact/">contact page</a></li>
                </ul>
              </li>
              {/* <li>No, you do not have to be a working developer to join us. This meetup is open to engineers, salespersons, owners, students, and anyone generally interested in tech and software</li> */}
            </ul>
            {/* <footer>This meetup is run under Learn Teach Code LA</footer> */}
          </article>
    </div>
    </Layout>
  )
}