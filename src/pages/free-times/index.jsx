import React from 'react';
import Layout from '../../components/Layout';

export default function FreeTimesPage() {
  return (
    <Layout>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=648eb580a538908ad5db65109eb362990ce4e4b22ca1895285f4e6e65101a34b%40group.calendar.google.com
        &ctz=America%2FLos_Angeles
        &mode=WEEK
        &showTitle=0
        &showPrint=0
        &showCalendars=0
        &showDate=0
        &showNav=0
        &showTz=0
        &showTabs=1
        &hours=8,22"
        style={{ border: "0", width: "100%", height: "90vh", maxHeight: "800px" }}
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        title="Google Calendar"
      />
    </Layout>
  )
}