# Copyright 2020 Creu Blanca
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).

{
    'name': 'Web Audio File',
    'summary': """
        Allow to preview audio files""",
    'version': '12.0.1.0.0',
    'license': 'AGPL-3',
    'author': 'Creu Blanca,Odoo Community Association (OCA)',
    'website': 'www.creublanca.es',
    'depends': [
        "mail"
    ],
    'data': [
        "template/assets.xml"
    ],
    'qweb': ['static/src/xml/preview.xml'],
}
