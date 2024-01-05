import React from 'react';
import Layout from '../../components/Layout';

export default function ProjectsPage() {
  return (
    <Layout>
        <h1><strong>Irvine Code & Coffee</strong></h1>
        <div class="">
          <article>
            <h2>Next meetup: Wednesday, January 17th, 6pm</h2>
            <p>This is a casual meetup for developers. Students and others working adjacent to software are more than welcome to come! Despite the name, we don't really code at these meetups; we like to talk, meet new friends, and make new connections.</p>
            <ul>
              <li>meet every other Wednesday at 6pm</li>
              <li>@ The center of the Woodbridge Village Center (The tables under the orange covers in front of Cha)</li>
              <li>RSVP to the event <a href="https://www.meetup.com/learnteachcode/events/297951794/" target='_blank'>here</a>!</li>
              <li>for any questions:
                <ul>
                  <li>#general channel in the Tech Link Up <a href="https://discord.com/channels/1187489446245961748/1187489446245961751" target='_blank'>Discord Server</a></li>
                </ul>
              </li>
            </ul>
          </article>
        </div>
    </Layout>
  )
}