import React from 'react';
import Layout from '../../components/Layout';

export default function ProjectsPage() {
  return (
    <Layout>
        <h1><strong>Irvine Code & Coffee</strong></h1>
        <div class="">
          <article>
            <h2>Next meetup: Wednesday, January 3rd, 6pm (Location change due to rain)</h2>
            <p>This is a casual meetup for developers. Students and others working adjacent to software are more than welcome to come! Despite the name, we don't really code at these meetups; we like to talk, meet new friends, and make new connections.</p>
            <ul>
              <li>meet every other Wednesday at 6pm</li>
              <li>due to the rain, we will be meting at Back Street Brewery inside Lamppost Pizza in Irvine<s>@ The center of the Woodbridge Village Center (The tables under the orange covers in front of Cha)</s></li>
              <li>find more info and RSVP to the event <a href="https://www.meetup.com/learnteachcode/events/297954536/" target='_blank'>here</a>!</li>
              <li>for any questions:
                <ul>
                  <li>#general channel in the <a href="https://discord.com/channels/1187489446245961748/1187489446245961751" target='_blank'>Tech Link Up Discord Server</a></li>
                  <li>message me on <a href="https://www.linkedin.com/in/yujioshiro/" target='_blank'>LinkedIn</a></li>
                </ul>
              </li>
            </ul>
          </article>
        </div>
    </Layout>
  )
}