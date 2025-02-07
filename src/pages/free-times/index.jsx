import React from 'react';
import Layout from '../../components/Layout';

export default function FreeTimesPage() {
  return (
    <Layout>
      <iframe 
        src="https://calendar.google.com/calendar/embed?src=648eb580a538908ad5db65109eb362990ce4e4b22ca1895285f4e6e65101a34b%40group.calendar.google.com&ctz=America%2FLos_Angeles"
        style={{ border: "0" }} 
        width="100%" 
        height="600" 
        frameBorder="0" 
        scrolling="no">
      </iframe>
    </Layout>
  )
}