---
description: Read this document to understand how to fetch data in the project, including when to use server-side rendering (SSR), static site generation (SSG), and client-side fetching.
---

# Data Fetching Strategy

This document outlines the data fetching strategy for the project, including when to use server-side rendering (SSR), static site generation (SSG), and client-side fetching. Follow these guidelines to ensure optimal performance and user experience.

## 1 Server-Side Rendering (SSR)

In Next.js, server-side rendering (SSR) is used to fetch data on the server for each request.

## 2. Data Fetching Methods

ALWAYS use the helper functions provided in the `app/utils/data-fetching` directory for data fetching. These helpers are designed to work with the project's architecture and ensure consistency across the application.

ALL helper functions in the `app/utils/data-fetching` directory should use drizzle-orm for database interactions. Do not use raw SQL queries or other database libraries directly in your components or pages.
