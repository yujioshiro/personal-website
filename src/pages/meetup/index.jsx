import React from 'react';
import Layout from '../../components/Layout';

export default function ProjectsPage() {
  return (
    <Layout>
        <h1><strong>Irvine Code & Coffee</strong></h1>
        <div class="">
          <article>
            <h2>Next meetup: Wednesday, December 20th, 6pm</h2>
            <p>This is a casual meetup for developers. Students and others working adjacent to software are more than welcome to come! Despite the name, we don't really code at these meetups; we like to talk, meet new friends, and make new connections.</p>
            <ul>
              <li>meet every other Wednesday at 6pm</li>
              <li>due to the forecasted rain, we will be meeting at Hangar 24 in Irvine this week, 17877 Von Karman Ave Unit 110, Irvine, CA 92614<strike>@ The center of the Woodbridge Village Center (The tables under the orange covers in front of Cha)</strike></li>
              <li>we are part of Learn Teach Code LA, you can RSVP to the event <a href="https://www.meetup.com/learnteachcode/events/297692498/" target='_blank'>here</a>!</li>
              <li>for any questions:
                <ul>
                  <li>#irvine channel in the <a href="https://discord.gg/TnqPC9mFSf" target='_blank'>LTC Discord Server</a></li>
                  <li>message me on <a href="https://www.linkedin.com/in/yujioshiro/" target='_blank'>LinkedIn</a></li>
                  <li>use my <a href="https://yujioshiro.com/contact/">contact page</a></li>
                </ul>
              </li>
            </ul>
          </article>
        </div>
    </Layout>
  )
}