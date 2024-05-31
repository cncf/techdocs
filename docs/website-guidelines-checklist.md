# CNCF website guidelines checklist

As per the
[CNCF Website Guidelines](https://github.com/cncf/foundation/blob/master/website-guidelines.md),
the following should be present:<br/> _Note_, not all of these are applicable to
all projects

- [ ] 1. Website should be [hosted in an open source repo](./repo-setup.md)
  - [ ] Hosted in the same organization as the main project
  - [ ] Setup [DCO](https://github.com/apps/dco) or CLA (DCO recommended)  
         CNCF's IP policy (https://github.com/cncf/foundation/blob/master/charter.md#11-ip-policy)
        requires all projects to use either CLA (Contributor License Agreements)
        or [DCO (Developer Certificate of Origin)](https://github.com/apps/dco).
        Unless there's a strong necessity to use CLA, we encourage projects to use
        DCO as it's easier to setup and use.
- [ ] 2. Reference the origin company correctly (if needed)<br/> _Note_: It is
     OK to say that, e.g., “Prometheus was originally created by Soundcloud” or
     “Kubernetes builds upon 15 years of experience of running production
     workloads at Google,” but the origin company should not otherwise be
     referred to on the project homepage.
- [ ] 3. No links or forms for capturing enterprise support leads should be
     present<br/> _Note_: It is fine to have an enterprise support, commercial
     partners or similar page.
  - [ ] If page is present, the companies list is alphabetized or randomized on
        load.
  - [ ] If page is present, the vetting of companies listed is complete<br/>
        _Note_: Projects are welcome to outsource this vetting to CNCF staff if
        it becomes a burden.
- [ ] 4. Links to companies offering support go to a page that at least mentions
     support of the project
- [ ] 5. Copyright notice present at bottom of page.<br/> Copyright should be to
     the project authors or to CNCF, not the origin company. For details, see
     [Copyright notices](https://github.com/cncf/foundation/blob/master/copyright-notices.md).
- [ ] 6. CNCF Branding elements
  - [ ] “We are a Cloud Native Computing Foundation project.” or “We are a Cloud
        Native Computing Foundation sandbox project.” present (depending on
        status)
  - [ ] CNCF logo near the bottom of their project homepage
  - [ ] _Optionally_ link to KubeCon + CloudNativeCon as the events approach
- [ ] 7. Page footer contents
  - [ ] Trademark guidelines by either linking to Trademark Usage (directly or
        via a "Terms of service" page), or by including the following text:<br/>
        "The Linux Foundation® (TLF) has registered trademarks and uses
        trademarks. For a list of TLF trademarks, see
        [Trademark Usage](https://www.linuxfoundation.org/trademark-usage/)".

## Community and license files

The following files should be in the root of the repository:

- [ ] [CNCF Community Code of Conduct](https://github.com/cncf/foundation/blob/master/code-of-conduct.md)
- [ ] Guidelines for Contributors (CONTRIBUTING.md or similar)
- [ ] [License file(s)](./repo-setup.md#license-files)
