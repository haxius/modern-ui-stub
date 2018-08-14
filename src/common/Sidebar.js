import React from 'react';
import { List } from '../ui';

export default (
  <List items={[
    {
      caption: 'Dashboard',
      children: [
        { caption: 'Ecommerce' },
        { caption: 'Analytics' },
        { caption: 'Fitness' },
      ],
    },
    {
      caption: 'Templates',
      children: [
        {
          caption: 'Vertical',
          children: [
            { caption: 'Modern Menu' },
            { caption: 'Semi Light' },
            { caption: 'Semi Dark' },
            { caption: 'Nav Dark' },
            { caption: 'Light' },
            { caption: 'Overlay Menu' },
          ],
        },
        {
          caption: 'Horizontal',
          children: [
            { caption: 'Classic' },
            { caption: 'Nav Dark' },
          ],
        },
      ],
    },
    {
      caption: 'Layouts',
      children: [
        {
          caption: 'Page Layouts',
          children: [
            { caption: 'One Column' },
            { caption: 'Two Columns' },
            {
              caption: 'Content Det Sidebar',
              children: [
                { caption: 'Detached Left Side' },
                { caption: 'Detached Sticky Left' },
                { caption: 'Detached Right Side' },
                { caption: 'Detached Sticky Right' },
              ],
            },
            { caption: 'Fixed Navbar' },
            { caption: 'Fixed Navigation' },
            { caption: 'Fixed Navbar & Navigation' },
            { caption: 'Fixed Navbar & Footer' },
            { caption: 'Fixed Layout' },
            { caption: 'Boxed Layout' },
            { caption: 'Static Layout' },
            { caption: 'Light Layout' },
            { caption: 'Dark Layout' },
            { caption: 'Semi Dark Layout' },
          ],
        },
        {
          caption: 'Navbars',
          children: [
            { caption: 'Navbar Light' },
            { caption: 'Navbar Dark' },
            { caption: 'Navbar Semi Dark' },
            { caption: 'Brand Center' },
            { caption: 'Fixed Top' },
            {
              caption: 'Hide on Scroll',
              children: [
                { caption: 'Hide on Scrolltop' },
                { caption: 'Hide on Scrollbottom' },
              ],
            },
            { caption: 'Navbar Components' },
            { caption: 'Navbar Styling' },
          ],
        },
        {
          caption: 'Vertical Nav',
          children: [
            {
              caption: 'Navigation Types',
              children: [
                { caption: 'Vertical Navigation' },
                { caption: 'Vertical Overlay' },
              ],
            },
            { caption: 'Compact Menu' },
            { caption: 'Fixed Navigation' },
            { caption: 'Static Navigation' },
            { caption: 'Navigation Light' },
            { caption: 'Navigation Dark' },
            { caption: 'Accordion Navigation' },
            { caption: 'Collapsiable Navigation' },
            { caption: 'Flipped Navigation' },
            { caption: 'Native Scroll' },
            { caption: 'Right Side Icons' },
            { caption: 'Bordered Navigation' },
            { caption: 'Disabled Navigation' },
            { caption: 'Navigation Styling' },
            { caption: 'Tags & Pills' },
          ],
        },
        {
          caption: 'Horizontal Nav',
          children: [
            {
              caption: 'Navigation Types',
              children: [
                { caption: 'Classic' },
                { caption: 'Nav Dark' },
              ],
            },
          ],
        },
        {
          caption: 'Page Headers',
          children: [
            { caption: 'Breadcrumbs basic' },
            { caption: 'Breadcrumbs top' },
            { caption: 'Breadcrumbs bottom' },
            { caption: 'Breadcrumbs with Button' },
            { caption: 'Breadcrumbs with Round Button' },
            { caption: 'Breadcrumbs with Stats' },
          ],
        },
        {
          caption: 'Footers',
          children: [
            { caption: 'Footers Light' },
            { caption: 'Footers Dark' },
            { caption: 'Footers Transparent' },
            { caption: 'Footers Fixed' },
            { caption: 'Footers Components' },
          ],
        },
      ],
    },
    {
      caption: 'Starter Kit',
      children: [
        { caption: 'One Column' },
        { caption: 'Two Columns' },
        {
          caption: 'Content Det Sidebar',
          children: [
            { caption: 'Detached Left Side' },
            { caption: 'Detached Sticky Left' },
            { caption: 'Detached Right Side' },
            { caption: 'Detached Sticky Right' },
          ],
        },
        { caption: 'Fixed Navbar' },
        { caption: 'Fixed Navigation' },
        { caption: 'Fixed Navbar & Navigation' },
        { caption: 'Fixed Navbar & Footer' },
        { caption: 'Fixed Layout' },
        { caption: 'Boxed Layout' },
        { caption: 'Static Layout' },
        { caption: 'Light Layout' },
        { caption: 'Dark Layout' },
        { caption: 'Semi Dark Layout' },
      ],
    },
  ]}/>
);
