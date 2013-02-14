pp.views.Explore = pp.View.Common.extend({

    t: 'explore',

    selfRender: true,

    subviews: {
        '.quests': function () {
            var collection = new pp.models.QuestCollection([], {
               'status': 'open'
            });
            collection.comparator = function(m1, m2) {
                if (m1.like_count() > m2.like_count()) return -1; // before
                if (m2.like_count() > m1.like_count()) return 1; // after

                if (m1.comment_count() > m2.comment_count()) return -1;
                if (m2.comment_count() > m1.comment_count()) return 1;
                return 0; // equal
            };
            collection.fetch();
            collection.sort();

            return new pp.views.QuestCollection({
                collection: collection
            });
        },
    },
});
