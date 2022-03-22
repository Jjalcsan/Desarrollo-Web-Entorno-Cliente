export interface Libros {
    numFound:      number;
    start:         number;
    numFoundExact: boolean;
    docs:          Doc[];
    num_found:     number;
    q:             string;
    offset:        null;
}

export interface Doc {
    key:                      string;
    type:                     Type;
    seed:                     string[];
    title:                    string;
    title_suggest:            string;
    has_fulltext:             boolean;
    edition_count:            number;
    edition_key:              string[];
    publish_date?:            string[];
    publish_year?:            number[];
    first_publish_year?:      number;
    number_of_pages_median?:  number;
    lccn?:                    string[];
    publish_place?:           string[];
    oclc?:                    string[];
    contributor?:             string[];
    lcc?:                     string[];
    ddc?:                     string[];
    isbn?:                    string[];
    last_modified_i:          number;
    ebook_count_i:            number;
    ia?:                      string[];
    public_scan_b?:           boolean;
    ia_collection_s?:         string;
    lending_edition_s?:       string;
    lending_identifier_s?:    string;
    printdisabled_s?:         string;
    cover_edition_key?:       string;
    cover_i?:                 number;
    first_sentence?:          string[];
    publisher:                string[];
    language?:                string[];
    author_key?:              string[];
    author_name?:             string[];
    author_alternative_name?: string[];
    place?:                   string[];
    subject?:                 string[];
    time?:                    string[];
    id_bcid?:                 string[];
    id_goodreads?:            string[];
    id_hathi_trust?:          string[];
    id_librarything?:         string[];
    id_overdrive?:            string[];
    ia_loaded_id?:            string[];
    ia_box_id?:               string[];
    publisher_facet:          string[];
    place_key?:               string[];
    time_facet?:              string[];
    subject_facet?:           string[];
    _version_:                number;
    place_facet?:             string[];
    lcc_sort?:                string;
    author_facet?:            string[];
    subject_key?:             string[];
    ddc_sort?:                string;
    time_key?:                string[];
    subtitle?:                string;
    id_amazon?:               string[];
}

export enum Type {
    Work = "work",
}
