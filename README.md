# Portfolio Website

A static portfolio website hosted on **Amazon S3** with a **CI/CD pipeline using GitHub Actions**.

## Overview

I created this project to host my portfolio website using Amazon S3 Static Website Hosting.

Initially, updating the website required manually uploading the updated files to the S3 bucket through the AWS Management Console.

To make the process easier and more efficient, I created a CI/CD pipeline using GitHub Actions.

## CI/CD Pipeline

The pipeline allows me to update the website without manually uploading files to S3.

The workflow is:

```text
Local Code
    |
    v
Git Commit
    |
    v
GitHub Repository
    |
    v
GitHub Actions
    |
    v
AWS S3
    |
    v
Live Website
```

When I make changes to the website, I commit and push the updated code to GitHub. GitHub Actions then automatically deploys the changes to the S3 bucket.

This reduces manual work and makes updating the website faster and easier.

## Architecture

<p align="center">
  <img src="frontend/assets/architecture-diagram.png" width="900">
</p>

## Technologies

* HTML
* CSS
* JavaScript
* Git
* GitHub
* GitHub Actions
* Amazon S3
* PowerShell

## Purpose

The purpose of this project was to gain practical experience with:

* AWS S3
* Static website hosting
* Git and GitHub
* CI/CD
* GitHub Actions
* Automated cloud deployments
