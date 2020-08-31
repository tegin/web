/** ********************************************************************************
    Copyright 2020 Creu Blanca
    Copyright 2017-2019 MuK IT GmbH
    License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl).
 **********************************************************************************/

odoo.define("audio_file.preview", function(require) {
    "use strict";

    var DocumentViewer = require("mail.DocumentViewer");

    DocumentViewer.include({
        init: function (parent, attachments) {
            this._super.apply(this, arguments);
            var self = this;
            this.attachment = this.attachment.concat(
                _.filter(attachments, function (attachment) {
                    if (
                        attachment.type !== 'url'
                        && attachment.mimetype.match("audio")
                    ) {
                       attachment.type = 'audio';
                       attachment.source_url = self._getAudioSource(attachment);
                       return true;
                    }
                })
            );
        },
        _getAudioSource: function (attachment) {
            return "web/image/" + attachment.id;
        },
    });

});
