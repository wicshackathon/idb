from __future__ import print_function



import argparse
import json
import pprint
import requests
import sys
import urllib
import sqlalchemy
from sqlalchemy import *
import pymysql
from GooglePlaces import get_places 

import ScenicLocations

pymysql.install_as_MySQLdb()

# This client code can run on Python 2.x or 3.x.  Your imports can be
# simpler if you only need one of those.
try:
    # For Python 3.0 and later
    from urllib.error import HTTPError
    from urllib.parse import quote
    from urllib.parse import urlencode
except ImportError:
    # Fall back to Python 2's urllib2 and urllib
    from urllib2 import HTTPError
    from urllib import quote
    from urllib import urlencode

user = 'TheCoolBeans'
pwd = 'riley5143'
host = 'beansdb.cahtfudy2tyu.us-east-1.rds.amazonaws.com'
db = 'beansdb'
uri = 'mysql://%s:%s@%s/%s' % (user, pwd, host, db)

def main():
    try:
            
            views = get_places()

            db = create_engine(uri)
            metadata = MetaData()
            metadata.reflect(bind=db)

            #print(metadata.tables['Scenic'])
            #selecte query execute
            #res = conn.execute(select_st).fetchall()
            #print (res)

            for v in views :
                ins = insert(metadata.tables['Scenic']).values(
                scenic_name = bytes(v.name, 'utf8'),
                scenic_address = bytes(v.address, 'utf8'),
                scenic_rating = bytes(str(v.rating), 'utf8'),
                scenic_review1 = bytes(v.review1, 'utf8'),
                scenic_review2 = bytes(v.review2, 'utf8'),
                scenic_picture = bytes(v.photo, 'utf8'),
                scenic_latitude = bytes(str(v.latitude), 'utf8'),
                scenic_longitude = bytes(str(v.longitude), 'utf8'),
                scenic_place_id = bytes(v.placeID, 'utf8'),
                )
                conn = db.connect()
                conn.execute(ins)
            return views
    except HTTPError as error:
            sys.exit(
                'Encountered HTTP error {0} on {1}:\n {2}\nAbort program.'.format(
                    error.code,
                    error.url,
                    error.read(),
                )
            )


if __name__ == '__main__':
    main()
    print("INSERTED DATA")
