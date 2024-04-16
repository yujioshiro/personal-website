import React from 'react';
import Layout from '../../components/Layout';

export default function ProjectsPage() {
  return (
    <Layout>
        <h1><strong>tech meetups yuji helps run in orange county, ca</strong></h1>
        
        <h2>Hike with New Tech Friends</h2>
        <div class="">
          <article>
            <h3>Sunday, April 21st, 10am</h3>
            <p>Come on a casual hike at the Bommer Canyon trails. It will be a casual 1-1.5hr walk with new friends!</p>
            <ul>
              <li>We will meet at the <a href="https://maps.app.goo.gl/dvT1gJjjjQERzYKt7">Turtle Rock Community Park parking lot</a> (somewhere by the tennis courts). There are 40+ people RSVPd, so it should be pretty easy to spot us.</li>
              <li>More info and RSVP to the event <a href="https://www.meetup.com/oc-tech-link-up/events/300157916/" target='_blank'>here</a>!</li>
              <li>for any questions:
                <ul>
                  <li>#general channel in the Tech Link Up <a href="https://discord.com/channels/1187489446245961748/1187489446245961751" target='_blank'>Discord Server</a></li>
                </ul>
              </li>
            </ul>
          </article>
        </div>

        <h2>Irvine Code and Coffee</h2>
        <div class="">
          <article>
            <h3>Next meetup: Wednesday, April 24th, 6pm</h3>
            <p>This is a casual meetup for developers, designers, and everyone in tech! Despite the name, we don't code at these meetups; we like to talk, meet new friends, and make new connections.</p>
            <ul>
              <li>meet every other Wednesday at 6pm</li>
              <li>@ Hangar 24 (exact location will be sent in the Discord), <a href="https://maps.app.goo.gl/SUDHHD31Qq2J8Yqc7">17877 Von Karman Ave Unit 110, Irvine, CA 92614</a></li>
              <li>RSVP to the event <a href="https://www.meetup.com/oc-tech-link-up/events/299716046/" target='_blank'>here</a>!</li>
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