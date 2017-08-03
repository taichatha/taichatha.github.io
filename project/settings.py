# -*- coding: utf-8 -*-

import os

REPO_NAME = 'flask-ghpages-examples' #used for FREEZER_BASE_URL
DEBUG = True

APP_DIR = os.path.dirname(os.path.abspath(__file__))

def parent_dir(path):
    '''Return the parent of a directory.'''
    return os.path.abspath(os.path.join(path, os.pardir))

PROJECT_ROOT = parent_dir(APP_DIR)
# In order to deploy to github pages, you must build the static files to
# the project root

FREEZER_DESTINATION = PROJECT_ROOT
#Since this is a repo page (not a github user page)
#we need to set the BASE_URL to the correct url as per GH pages' standards
FREEZER_BASE_URL = 'http://localhost/{0}'.format(REPO_NAME)
FREEZER_REMOVE_EXTRA_FILES = False #Important if this is true, all app files
#will be deleted when you run the freezer

FLATPAGES_MARKDOWN_EXTENSIONS = ['codehilite']
FLATPAGES_ROOT = os.path.join(APP_DIR, 'pages')
FLATPAGES_EXTENSION = '.md'


